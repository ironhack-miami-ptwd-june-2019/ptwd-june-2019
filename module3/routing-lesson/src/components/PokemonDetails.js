import React from 'react';

import axios from 'axios';

class PokemonDetails extends React.Component{

    constructor(props){
        super(props)
        this.state={}
    }


   componentDidMount(){

    const theNumber = this.props.match.params.id

        axios.get('https://pokeapi.co/api/v2/pokemon/'+theNumber)
        .then((result)=>{
            console.log(result)
            const name=result.data.name;
            const type=result.data.types[0].name;
            const num = result.data.id;
            const img = result.data.sprites.front_default

            this.setState({
                name: name,
                number: num,
                type: type,
                image: img
            })

        })
        .catch((err)=>{
            console.log(err)
        })

   }



        render(){
            console.log(this.props)
            return(
                <div>

                    <h1>{this.state.name}</h1>
                    <h3>Number: {this.state.number}</h3>
                    <h6>{this.state.type}</h6>
                    <img src={this.state.image}/>


                    
                </div>
            )
        }

}

export default PokemonDetails;