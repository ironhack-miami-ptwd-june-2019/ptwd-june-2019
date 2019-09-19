import React from 'react';
import animals from '../buncha-animals.json'


class AnimalList extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            list: animals,
            newName: "", 
            newWeight: "",
        }
    }



    showAnimals = () =>{
        return this.state.list.map((eachAnimal, index)=>{

            return (
                <div key={index} style={{
                    border: "1px solid black",
                    borderRadius: "4px",
                    width: "45%",
                    margin: "10px",
                    padding: "5px"
                    }}>
                    <h4>{eachAnimal.name}</h4>
                    <p>Weight: {eachAnimal.weight}</p>
                    <button onClick = {
                        ()=>{
                        this.deleteAnimal(index)
                        }
                        }> Delete </button>
                </div>
            )
        })
    }

                addTheAnimal = (e) =>{
                    e.preventDefault();

                    let newList = [...this.state.list];
                    // create a copy of the thing that you wanna mess with

                    let newAnimal = {name: this.state.newName, weight: this.state.newWeight}

                    newList.unshift(newAnimal);

                    // this.state.list.push({name: this.state.newName, weight: this.state.newWeight})
                    // never do this

                    this.setState({
                        list: newList,
                        newName: "",
                        newWeight: "",
                    }) 
                }


                updateTheValue = (e) =>{
                    // this.state[e.target.name] = e.target.value
                    // never do this
                    // never update the state directly
                    // instead use this.setState
                    this.setState({
                        [e.target.name]: e.target.value
                    })   
                }


                deleteAnimal = (whichOne) =>{
                       let copy = [...this.state.list];
                       copy.splice(whichOne, 1);
                       this.setState({list: copy})
                }


    render(){
        return(
            <div>

                <form onSubmit = {this.addTheAnimal}>
                    <h5>New Animal</h5>

                    <legend> Name </legend>
                    <input value={this.state.newName} onChange={this.updateTheValue} name="newName" type="text" />

                    <legend> Weight </legend>
                    <input value={this.state.newWeight} onChange={this.updateTheValue} name="newWeight" type="number" />

                    <button>Save</button>

                </form>

                {this.showAnimals()}
               
            </div>
        )
    }





}


export default AnimalList;

