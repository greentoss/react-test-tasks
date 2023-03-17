import React from 'react';
import {BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Header from "./components/organisms/app-header/header";
import Home from "./pages/app-home/home";
import Favourites from "./pages/app-favourites/favourites";

const App = () =>  {
  return (
    <>
      <Router >
        <Header/>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/favourites' element = {<Favourites />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
