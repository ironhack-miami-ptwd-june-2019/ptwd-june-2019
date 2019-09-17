import React from 'react';
import './App.css';

import UserInfo from './components/userinfo';

import Animals from './components/animals';

class App extends React.Component{

  render(){
    return (
      <div>
        <h2>Hello, welcome to app</h2>

      <UserInfo />

      <Animals />

     


      </div>
      );
    }
}

export default App;
