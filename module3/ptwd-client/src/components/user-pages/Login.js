import React from "react";
import axios from "axios";


export default class Login extends React.Component {

    constructor(){
        super();
        this.state = {
            email: "",
            password:"",
            message: null
        }
    }

    genericSync(event){
        // console.log("what is: ", event.target.value)
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit (event){
        // console.log("submitting form");
        event.preventDefault();

        axios.post(
            // route we are hitting in the backend
            "http://localhost:3001/api/login",
            // the data from the form (AKA req.body 🚀) that we are sending to this route to do the job
            this.state,
            // secure sending
            { withCredentials: true }
        )
        .then( responseFromServer => {
            // console.log("response is:", responseFromServer);
            const { userDoc } = responseFromServer.data;
            this.props.onUserChange(userDoc);
            alert("You are logged in.")
        })
        .catch( err => {
            // console.log("err: ", err.response)
            if(err.response.data) return this.setState({ message: err.response.data.message })
        });
    }




    render(){
        const { fullName, email, password } = this.state;

        return (
            <section>
                <h2> Login </h2>
                <form onSubmit ={ event => this.handleSubmit(event) } >
            
                    <label> Email: </label>
                    <input
                        value={email} // this.state.email
                        onChange = { event => this.genericSync(event) } 
                        type="email"
                        name="email"
                        placeholder="my-email@ironhack.com"
                    />

                    <label> Password</label>
                    <input
                        value={password} // this.state.password
                        onChange = { event => this.genericSync(event) } 
                        type="password"
                        name="password"
                        placeholder="***********"
                    />
                    <button> Login </button>
                </form>
                {/* if the message is not null (basically if there's a message) then show it in this <div> tag */}
                { this.state.message && <div> { this.state.message } </div> }
            </section>
        )
    }
}