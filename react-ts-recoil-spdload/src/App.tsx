import React from 'react';
import {BrowserRouter as Router,  Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/organisms/app-header/Header";
import Home from "./pages/app-home/Home";
import Favourites from "./pages/app-favourites/Favourites";

const App = () =>  {
  return (
    <>
      <Router >
        <Header/>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/favourites' element = {<Favourites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
