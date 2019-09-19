
import React from 'react';
import '../App.css';


class SingleAnimal extends React.Component{

    render(){
        return(
            <div className = "animal-box" >
                <h2>Name: {this.props.name}</h2>
                <h6>Weight: {this.props.weight}</h6>
            </div>
        )
    }






}


export default SingleAnimal;