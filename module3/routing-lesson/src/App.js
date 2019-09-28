import React from 'react';
import './App.css';

import {Router, Switch, Route, Link} from 'react-router-dom'

import pokemon from './pokemon.json';

import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';


import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';






class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      pokemon: pokemon
    }
  }

  render(){
      return (
        <div >
          <Link to="/">Home</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="/pokemon">Pokemon  List</Link>

          <div>
            <br /><br /><br /><br /><br />

          </div>

        
          <Switch>

              <Route exact path='/page' component={PageOne}/>
              <Route path='/page/two' component={PageTwo}/>
              <Route path='/three' component={PageThree}/>


              <Route exact path='/pokemon' render = {(props) => <PokemonList {...props} list={this.state.pokemon} />} />

              <Route path='/pokemon/:id' render = {(props) => <PokemonDetails {...props} list={this.state.pokemon} />} />

          



          </Switch>
        


      
        </div>
      );
  }
}

export default App;
