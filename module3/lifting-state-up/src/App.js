import React from 'react';

import './App.css';

import Login from './components/login';

import Navbar from './components/Navbar';

class App extends React.Component {

  constructor(props){
    super(props)

    this.state={
      currentUser: null
    }
  }

  doTheLogin = (usrnm, pswrd) =>{

    console.log('logging in in App Component', usrnm, pswrd)

    let newUser = {username: usrnm, password: pswrd}

    this.setState({currentUser: newUser})

  }

  logMeOut = () =>{
    this.setState({currentUser: null})
  }
 


  render(){
        return (
        <div>

                { this.state.currentUser &&
              <h2>Welcome, {this.state.currentUser.username}</h2>
                }

          <Navbar theUser = {this.state.currentUser} doLogout={this.logMeOut} />

          <Login blah={this.doTheLogin}/>
      
        </div>
      );
  }
}

export default App;
