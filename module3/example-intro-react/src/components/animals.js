import React from 'react';

import animals from '../animals.json';

class Animals extends React.Component{

    constructor(props){
        super(props)
        this.state={list: animals}
    }


    showListOfAnimals = ()=>{
// if its a function that is meant to show stuff, it always has to return stuff or its useless so put return as the first word in the function
        return this.state.list.map((eachAnimal)=>{

            if(eachAnimal.weight > 100){
                return(
                <div style={{border: '1px solid black', margin: "20px"}}>
                 <h6 style={{color: 'red'}}>{eachAnimal.name}</h6>
                 <p>Weight: {eachAnimal.weight}</p>
                </div>
                )
            } else{
                return(
                <div style={{border: '1px solid black', margin: "20px"}}>
                 <h6 style={{color: 'blue'}}>{eachAnimal.name}</h6>
                 <p>Weight: {eachAnimal.weight}</p>
                </div>
                )

            }
        })
    }


// if we wanted to only show the heavy animals
// we would simply copy our same function we already have, but we would
// filter the list first by weight

    // showListOfHeavyAnimals = ()=>{
    //             return this.state.list.filter((eachAnimal)=>{
    //                 return eachAnimal.weight > 100 
    //             }).map((eachAnimal)=>{
        
    //                 return(
    //                  <div style={{border: '1px solid black', margin: "20px"}}>
    //                      <h6>{eachAnimal.name}</h6>
    //                      <p>Weight: {eachAnimal.weight}</p>
    //                 </div>
    //                     )
    //             })
    //         }



  render(){  
    return (
      <div>

        {this.showListOfAnimals()}
    
      </div>
      );
    }
}

export default Animals;
