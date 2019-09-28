import React from 'react';

import {Link} from 'react-router-dom';


const PokemonList = (props) =>{

    console.log(props)

    const showPokes = () =>{
        return(
            props.list.map((eachPokemon)=>{
                return(
                    <div key={eachPokemon.number}>
                        <Link to={`/pokemon/${eachPokemon.number}`}>
                        {eachPokemon.name}
                        {eachPokemon.number}
                        </Link>
                        <br />
                        <br />
                    </div>
                )
            })
        )
    }

    return(
        <div>
            {showPokes()}
        </div>

    )



}


export default PokemonList;