// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './Home.js';
import {Route, Routes, BrowserRouter, NavLink} from 'react-router-dom' ;
function App() {
  const [toDos, setToDos] = useState(["Sprawdzic prace", "Wpisac oceny", "Napisac do studentow"]);

// virtual dom mapowanie pomiedzy tym co jest w JS a tym gdzie to ma sie wyswietlic 
  return (
    <div className="App">
      {/* <Home toDos ={toDos} setToDos={setToDos}/> */}
      <BrowserRouter>
      <nav>
        <NavLink>linkone</NavLink>
        <a>linkone</a>
        <a>linkone</a>
      </nav>
      <Routes>
        <Route path="/home" element={<Home toDos={toDos} setToDos={setToDos} />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
