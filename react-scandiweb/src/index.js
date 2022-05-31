import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

// const uri = 'http://localhost:4000/';
//
// const client = new ApolloClient({
//     uri: uri,
//     cache: InMemoryCache()
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<ApolloProvider client={client}>*/}
        <App />
    {/*</ApolloProvider>*/}
  </React.StrictMode>
);

reportWebVitals();
