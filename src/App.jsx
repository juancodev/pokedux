import { useEffect } from 'react';
import { Col } from 'antd';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logoImg from './static/logo.svg';
import PokeBallLoader from './components/PokeBallLoader';
import { fetchPokemonWithDetails } from './slices/dataSlice';
import './App.css';

function App() {

  const pokemons = useSelector(state => state.data.pokemons, shallowEqual);
  const loading = useSelector(state => state.state.ui.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonWithDetails());
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
