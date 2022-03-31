import { useState } from "react";
import Home from "./pages/Home";
import AddNotice from "./pages/AddNotice";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import GroupNotice from "./pages/GroupNotices";
function App() {

  const [studentsNotices, setStudentNotice] = useState([
    {
      firstname: "Jan Kowalski",
      email: "jan.kowalski@gmail.com",
      description: "Lorem ipsum non lectus tincidunt. Etiam dictum ligula sed arcu mollis fringilla. ",
      tags: ["front-end", "back-end"],
      courses: ["Projekt zespołowy", "Projektowanie interfejsów webowych"]
    },
    {
      firstname: "Jan Wolski",
      email: "jan.wolski@gmail.com",
      description: "Lorem ipsum non lectus tincidunt. Etiam dictum ligula sed arcu mollis fringilla. ",
      tags: ["front-end", "back-end", "database"],
      courses: ["Bazy danych 2", "Projektowanie interfejsów webowych"]
    },
    {
      firstname: "Jutland",
      email: "jutland@gmail.com",
      description: "Lorem ipsum non lectus tincidunt. Etiam dictum ligula sed arcu mollis fringilla. ",
      tags: ["sieci komputerowe", "cisco", "#niechcemisie"],
      courses: ["Sieci komputerowe", "kurs od 0 do projektowania sieci"]
    },
  ]);
  const addStudentNotice = (newStudentNotice) =>{
    setStudentNotice(studentsNotices.concat([newStudentNotice]));
  }
  const [groupNotices, setGroupNotice] = useState([
    {
        groupName: "Wojownicy",
        people: ["Zbychu", "Krzesiwo", "Warzone"],
        course: "Magiczne zwierzaki",
        description: "Lorem ipsum non lectus tincidunt. Etiam dictum ligula sed arcu mollis fringilla. ",
        
    },
    {
        groupName: "Buzdygan",
        people: ["Krzemień", "Waldo", "kilkutron"],
        course: "Projekt zespołowy ",
        description: "Lorem ipsum non lectus tincidunt. Etiam dictum ligula sed arcu mollis fringilla. ",
    },
  ]);
  const [query, setQuery] = useState("");
  const updateQuery = (event) =>{
    setQuery(event.target.value);
  };

  return (
    <> 
    <BrowserRouter>
     
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/add">Dodaj nowe ogłoszenie</NavLink> 
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">Znajdź ogłoszenia</NavLink>
            </li>
          </ul>
          <input value={query} onChange = {updateQuery} />
        </nav>
        <header>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home students={studentsNotices} query={query} />} />
          <Route path="/add" element={<AddNotice addNewStudentNotice={addStudentNotice} />}/>
          <Route path="/search" element={<GroupNotice groupNotices={groupNotices} query={query.toLowerCase()} />}/>
        </Routes>
      
      </main>
      </BrowserRouter>
      <footer>
        
      </footer>
    </>
  );
}

export default App;
