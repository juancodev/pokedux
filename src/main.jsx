import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import { Provider } from 'react-redux';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { logger } from './middleware/index';
import './index.css'

const composeAlternative = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const composedEnhancers = composeAlternative(applyMiddleware(thunk, logger));
const store = createStore(rootReducer, composedEnhancers);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
