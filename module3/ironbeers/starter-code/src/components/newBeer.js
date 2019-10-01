import React from 'react';

import axios from 'axios';



class NewBeer extends React.Component{

    constructor(props){
        super(props)
        this.state={
            newName:"",
            newTagLine: "",
            newContributor: "",
        }
    }


    addNew = (e) =>{
        e.preventDefault();
        const newBeer = {
            name: this.state.newName,
            tagline: this.state.newTagLine,
            contributed_by: this.state.newContributor
        }

        axios.post('https://ih-beer-api.herokuapp.com/beers/new', newBeer)
        .then((blah)=>{

            // how do we redirect inside a function in react?
            this.props.history.push('/')
            // this is how you redirect

        })
        .catch((err)=>{
            console.log(err)
        })

    }


    handleInput = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }


    render(){
        return(
            <div>
                <form onSubmit={this.addNew}>

            <p>Name</p>
            <input value={this.state.newName} 
            name="newName" 
            onChange={this.handleInput}
            />

            <p>Tagline</p>
            <input value={this.state.newTagLine} 
            name="newTagLine" 
            onChange={this.handleInput}
            />

            <p>Contributor</p>
            <input value={this.state.newContributor} 
            name="newContributor" 
            onChange={this.handleInput}
            />



            <button>Submit</button>

                </form>
               
            </div>
        )
    }






}

export default NewBeer;