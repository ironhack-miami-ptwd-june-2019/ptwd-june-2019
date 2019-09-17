import React from 'react';
import '../App.css';
import data from '../coolboy55.json'
// we import this json because we have no DB

class UserInfo extends React.Component{
// if you redefine your own constructor, first line must be super(props)
    constructor(props){
        super(props);
        this.state = {info: data} 
        
    }
    // normally, we would make an axios call and then put some stuff from the Database
    // into this.state, but we dont have a DB so instead we use a JSON file
  render(){
      console.log(this.state.info);
    return (
        <div>

            {/* this is a fancy if statement */}
            {/* if the thing on the left side of the && is true or truthy */}
            {/* then the thing on the right side will exist */}
            {this.state.info.loggedin && <h3>Currently Logged In</h3>}

            <h2>User Info:</h2>

            <h4>Username: {this.state.info.username}</h4>

            <p>Age: {this.state.info.age > 50 && `Wow, you are old, you are ${this.state.info.age}`}</p>

            <p>CatchPhrase: {this.state.info.catchphrase}</p>
        </div>
      );
    }
}

export default UserInfo;
