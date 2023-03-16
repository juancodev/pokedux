import { useEffect } from 'react';
import { Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonFirstGeneration } from "./api/pokeapi";
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import { getPokemonWithDetails, setLoading } from './actions';
import logoImg from './static/logo.svg';
import './App.css';
import PokeBallLoader from './components/PokeBallLoader';

function App() {

  const pokemons = useSelector(state => state.pokemons);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      const resultListPokemon = await getPokemonFirstGeneration();
      dispatch(getPokemonWithDetails(resultListPokemon));
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logoImg} alt='Logo-pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={8}>
          <PokeBallLoader />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
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
