import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/root.js'


const store = createStore(rootReducer,
  compose(applyMiddleware(thunk)   , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))

console.log('frontend started!')


ReactDOM.render(
<>
      <Provider store = { store }>
        <App />
      </Provider>
</>,
  document.getElementById('root')
);
