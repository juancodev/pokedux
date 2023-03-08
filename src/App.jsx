import { useState, useEffect } from 'react';
import { Col } from 'antd';
import axios from "axios";
import endPoint from "./api/pokeapi";
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logoImg from './static/logo.svg';
import './App.css'

function App() {

  const [pokemons, setPokemons] = useState([]);
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
}

export default App
