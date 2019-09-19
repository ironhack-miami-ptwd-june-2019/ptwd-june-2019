import React from 'react';



export default class User extends React.Component{

    render(){
        return(
            <div>
                <p>
                This is the user component
                </p>

                <h3>Welcome, {this.props.theUsername}</h3>



            </div>
        )
    }



}

