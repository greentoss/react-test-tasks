import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {InMemoryCache, ApolloClient, ApolloProvider} from '@apollo/client';

const uri = 'http://localhost:4000/';

const client = new ApolloClient({
        uri: uri,
        cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
  </React.StrictMode>
);

reportWebVitals();
