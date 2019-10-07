import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Signup from "./components/user-pages/Signup";

class App extends React.Component {
  render (){   
    return (
      <div >
          <Signup />
      </div>
    );
  }
}

export default App;
