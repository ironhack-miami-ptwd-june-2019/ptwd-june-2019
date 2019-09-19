import React from 'react';
import './App.css';

import User from './components/user';

import SingleAnimal from './components/single-animal';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      listOfAnimals : [
        {name: "Hippo", weight: '4000 lbs'},
        {name: "Walrus", weight: '5000 lbs'},
        {name: "Horse", weight: '1200 lbs'},
        {name: "Dog", weight: '60 lbs'},
        {name: "Mouse", weight: '3 oz'},
        {name: "Dragonfly", weight: '1 oz'},
        {name: "Human", weight: '150 lbs'},
      ]
    }
  }


  showAnimals = () =>{
    return this.state.listOfAnimals.map((eachAnimal)=>{

      return(

        <SingleAnimal  
        name={eachAnimal.name} 
        weight={eachAnimal.weight}/>
        
        )
    })

  }

  render(){

      return (
        <div>

        Hello

      <User theUsername="coolgirl77" />


        {this.showAnimals()}
   

        
      </div>
    );
  }
}

export default App;
