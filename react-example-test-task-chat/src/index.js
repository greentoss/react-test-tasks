import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";

let storeCounter = 0

const defaultState = {
    message: '',
    id: 0,
    time: 0,
}

const reducer = (state = defaultState, action) => {
      switch (action.type) {
          case 'ADD_MESSAGE':
              console.log(state, ': previous store')
              storeCounter ++;
              return {...state, message: action.addedMessage, time: action.time, id: storeCounter}
          default:
              return state
      }
}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
