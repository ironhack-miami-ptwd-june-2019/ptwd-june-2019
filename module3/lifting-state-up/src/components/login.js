import React from 'react';



class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            usernameInput: "",
            passwordInput: "",
        }
    }


    logMeIn = (e) =>{
        e.preventDefault();

        this.props.blah(this.state.usernameInput, this.state.passwordInput);
       
        this.setState({
            usernameInput: "",
            passwordInput: "",
        })
    }


    updateInput = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }
    

    render(){
        return(
            <div>
            

               <form onSubmit={this.logMeIn}>
                   <p>Username</p>
                   <input 
                   value={this.state.usernameInput}
                   onChange={this.updateInput}
                   name="usernameInput"
                    />

                   <p>Password</p>
                   <input 
                   value={this.state.passwordInput}
                   onChange={this.updateInput}
                   name="passwordInput"
                    />

                    <button>Submit</button>

               </form>



            </div>
        )
    }




}

export default Login;