import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import FormField from './components/FormField';
import CoolButton from './components/CoolButton';

function App() {
  return (
    <div >

      <Navbar />

      <FormField theLabel="Name" 
      theTextForThePlaceHolder = "e.g Alex Smith"
      whatType ="text"
        />
      <FormField  theLabel="Email"
      theTextForThePlaceHolder = "e.g aSmith@gmail.com" 
      whatType = "email"
      />


      <CoolButton isSmall={true} isDanger={true} isOutlined />
      {/* if you just put the prop name its the same as saying = {true} */}
      {/* so these 2 lines do the same thing */}
      <CoolButton isRounded isDark isLarge />
      

    </div>
  );
}

export default App;
