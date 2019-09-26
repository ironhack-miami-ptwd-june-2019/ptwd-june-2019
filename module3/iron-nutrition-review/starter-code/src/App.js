import React, { Component } from 'react';
import './App.css';

import FoodBox from './components/foodbox';

import bunchafoods from './foods.json';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      allFoods: bunchafoods,
      visibleFoods: bunchafoods,
      nameInput: "",
      calInput: "",
      imgInput: "",
      formShowing: false,
    }
  }


  showAllTheFoods = () =>{

    return this.state.visibleFoods.map((eachfood, i)=>{

      return(
        <FoodBox key={i} 
        theName={eachfood.name}
        theCalories={eachfood.calories}
        theImage={eachfood.image}
         />
      )

    })

  }

  addNewFood = (e) =>{
    e.preventDefault();

    let all = [...this.state.allFoods];
    let visible = [...this.state.visibleFoods]

    let newFood = {
      name: this.state.nameInput,
      calories: this.state.calInput,
      image: this.state.imgInput
    };

    all.unshift(newFood);
    visible.unshift(newFood);


    this.setState({
      allFoods: all,
      visibleFoods: visible,
      nameInput:"",
      calInput:"",
      imgInput:"",
      formShowing: false,
      searchTerm: "",
    })


  }

  updateInput = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }


  toggleForm = () =>{
    this.setState({formShowing: !this.state.formShowing})
  }

  search = (e) =>{
    this.setState({searchTerm: e.target.value }, ()=>{

      
      let clone = [...this.state.visibleFoods];
      
      let filteredFoods = this.state.allFoods.filter((eachFood)=>{
      return eachFood.name.toUpperCase().includes(this.state.searchTerm.toUpperCase())

    })
        this.setState({visibleFoods: filteredFoods})
    })
  }


  render() {
    console.log(this.state)
    return (
      <div>

        <h2 className="title"> Search</h2>
        <input onChange={this.search}
         value={this.state.searchTerm}/>

        

        <h2 className="title">Foods</h2>

        <div style={{width: "40%", float: "left"}}>
            {this.showAllTheFoods()}
        </div>

        <div style={{width: "40%", float: "right"}}>


          {!this.state.formShowing && <button onClick={this.toggleForm}
           className="button is-success">
            Add New Food
          </button>}

          {this.state.formShowing && <form onSubmit={this.addNewFood}>
            <h2 className="title">Add New Food</h2>

            <p>Name</p>
            <input name="nameInput" type="text" 
            value={this.state.nameInput} 
            onChange={this.updateInput} />

            <p>Calories</p>
            <input name="calInput" type="number" 
            value={this.state.calInput} 
            onChange={this.updateInput} />

            <p>Image</p>
            <input name="imgInput" type="text" 
            value={this.state.imgInput} 
            onChange={this.updateInput} />

            <button>Submit</button>
          </form>}


         
        </div>


 
      </div>
    );
  }
}

export default App;
