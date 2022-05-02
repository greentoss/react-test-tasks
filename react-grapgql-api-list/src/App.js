
import './App.css';
import CharacterList from "./CharacterList";
import {Route, Router, Routes} from "react-router-dom";
import Character from "./Character";

function App() {

  return (
    <div className="App">
        App

            <Routes>
                <Route exact path = '/' element = {<CharacterList/>} />
                <Route path = '/:id' element = {<Character/>} />
            </Routes>


    </div>
  );
}

export default App;
