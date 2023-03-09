import { useEffect } from 'react';
import { Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import endPoint from "./api/pokeapi";
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { setPokemons } from './actions';
import logoImg from './static/logo.svg';
import './App.css'

function App() {

  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPokemons = async () => {
      const result = await axios.get(endPoint.pokemon.getPokemons);
      dispatch(setPokemons(result.data.results));
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

// const mapStateToProps = (state => ({
//   pokemons: state.pokemons,
// }));


// const mapDispatchToProps = (dispatch => ({
//   setPokemons: (value) => dispatch(setPokemonsActions(value))
// }));

export default App;
