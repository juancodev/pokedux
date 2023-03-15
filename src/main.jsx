import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import thunk from 'redux-thunk'
import { pokemonsReducer } from './reducers/pokemons'
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { logger } from './middleware/index';
import './index.css'

const composeAlternative = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const composedEnhancers = composeAlternative(applyMiddleware(thunk, logger));
const store = createStore(pokemonsReducer, composedEnhancers);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
