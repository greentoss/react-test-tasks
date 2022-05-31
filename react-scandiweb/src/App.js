import './App.css';
import React from "react";
import {BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Main from "./components/Main/Main";
import ClientError from "./components/ClientError/ClientError";
import ProductDescription from './components/ProductDescription/ProductDescription.js';
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";

class App extends React.Component {
  constructor() {
      super();
  }
  render () {
      return (
          <>
              <Router>
                  <Header />
                  <Routes>
                      <Route exact path='/' element = {<Main />} />
                      <Route path='/about' element = {<ProductDescription />} />
                      <Route path='/cart' element = {<Cart />} />
                      <Route path = '*' element = {<ClientError />} />
                  </Routes>
              </Router>

          </>
      );
  };
}

export default App;
