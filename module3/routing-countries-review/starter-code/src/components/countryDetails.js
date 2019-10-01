import React from 'react';

import {Link} from 'react-router-dom';


function CountryDetails(props){

    const theCode = props.match.params.code;
    
    // .find does the exact same thing as .filter with the saem syntax
    // except instead of giving you back an array of matches it gives you one single match (if there are 2 matches it gives you the first one)
    
    
    const theActualCountry = props.bunchaCountries.find((eachCountry)=>{
        return eachCountry.cca3 === theCode
    })


    const showBorders = () =>{
        return theActualCountry.borders.map((eachBorder)=>{
    
        const borderCountry = props.bunchaCountries.find((eachCountry)=>{
            return eachCountry.cca3 === eachBorder
        }) 
        
            
            return(
                <div>
                    <Link to={"/"+eachBorder}>
                    {borderCountry.name.common}
                    </Link>
                </div>
            )
        })
    }
    
    
    


    return(
        <div>
            <h2>{theActualCountry.name.common}</h2>
            <h5>Capital: {theActualCountry.capital}</h5>

            <p>Area: {theActualCountry.area} km<sup>2</sup> </p>

            {showBorders()}
        </div>
    )




}


export default CountryDetails;