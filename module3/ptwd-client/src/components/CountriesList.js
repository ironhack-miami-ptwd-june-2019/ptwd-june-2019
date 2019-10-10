import React from "react";
import axios from "axios";


export default class CountriesList extends React.Component {
    constructor(){
        super();
        this.state = {
           theCountriesFromAPI: []
        }
    }


    // componentDidMount(){
    //     axios.get("https://restcountries.eu/rest/v2/all")
    //     .then(responseFromRESTCOUNTRIESApi => {
    //         // console.log("Response is: ", responseFromRESTCOUNTRIESApi.data)
    //         this.setState({ theCountriesFromAPI: responseFromRESTCOUNTRIESApi.data })        
    //     })
    //     .catch(err =>console.log("Err while getting countries: ", err))
    // }

    // THE SAME AS ABOVE JUST USING FETCH
    // componentDidMount(){
    //     fetch("https://restcountries.eu/rest/v2/all")
    //     .then(responseFromRESTCOUNTRIESApi => {
    //         // console.log("Response is: ", responseFromRESTCOUNTRIESApi.json())
    //         return responseFromRESTCOUNTRIESApi.json()
    //     })
    //     .then(countries => this.setState({ theCountriesFromAPI: countries }))
    //     .catch(err =>console.log("Err while getting countries: ", err))
    // }


    // the same as above just creating the regular method
    fetchCountries(){
        fetch("https://restcountries.eu/rest/v2/all")
        .then(responseFromRESTCOUNTRIESApi => {
            // console.log("Response is: ", responseFromRESTCOUNTRIESApi.json())
            return responseFromRESTCOUNTRIESApi.json()
        })
        .then(countries => this.setState({ theCountriesFromAPI: countries }))
        .catch(err =>console.log("Err while getting countries: ", err))
    }


    render(){
        const { theCountriesFromAPI } = this.state;
        return (
            <div>
                {/* INVOKE METHOD HERE */}
                { this.fetchCountries() } 

                <ul>
                    { theCountriesFromAPI.map((oneCountry, i) => {
                            return (
                                <li key={i}> {oneCountry.name} </li>
                            )
                    })}
                </ul>
            </div>
        )
    }
}