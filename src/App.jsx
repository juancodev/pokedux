import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Col } from 'antd';
import axios from "axios";
import endPoint from "./api/pokeapi";
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { setPokemons as setPokemonsActions } from './actions';
import logoImg from './static/logo.svg';
import './App.css'

function App({ pokemons, setPokemons }) {

  useEffect(() => {
    const getPokemons = async () => {
      const result = await axios.get(endPoint.pokemon.getPokemons);
      setPokemons(result.data.results);
    };
    getPokemons()
      .then(() => console.info('result success!!'))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logoImg} alt='Logo-pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  )
};

const mapStateToProps = (state => ({
  pokemons: state.pokemons,
}));


const mapDispatchToProps = (dispatch => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
}));

export default connect(mapStateToProps, mapDispatchToProps)(App);
