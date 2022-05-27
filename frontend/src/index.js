import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/root.js'
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   useQuery,
//   gql
// } from "@apollo/client";

const store = createStore(rootReducer,
  compose(applyMiddleware(thunk)   , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ))
// { auth: {
//   isLoggedIn: false,
//   user: "any"
// },
// theme: {
//   mode: "dark"
// }}

// initialize graphql client
// for more info go to https://www.apollographql.com/docs/react/get-started/
console.log('frontend started!')
// const client = new ApolloClient({
//   uri: 'http://localhost:3001/graphql',
//   cache: new InMemoryCache()
// });


// client
//   .query({
//     query: gql`
//       {
//         hello
//       }
//     `
//   })
//   .then(
//     result => console.log(result) // console log that shows that the connection to the server side was seccueesful
//     );

ReactDOM.render(
<>
    {/* <ApolloProvider client={client}> */}
      <Provider store = { store }>
        <App />
      </Provider>
    {/* </ApolloProvider> */}
</>,
  document.getElementById('root')
);
