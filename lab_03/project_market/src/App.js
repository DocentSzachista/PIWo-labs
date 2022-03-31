import { useState } from "react";
import Home from "./pages/Home";
import AddNotice from "./pages/AddNotice";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import GroupNotice from "./pages/GroupNotices";
import AddGroupNotice from "./pages/AddGroupNotice";
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
        course: "Projekt zespołowy",
        description: "Lorem ipsum non lectus tincidunt. Etiam dictum ligula sed arcu mollis fringilla. ",
    },
  ]);
  const addGroupNotice = (newGroupNotice)=>{
    setGroupNotice(groupNotices.concat([newGroupNotice]));
  };
  const [query, setQuery] = useState("");
  const updateQuery = (event) =>{
    setQuery(event.target.value);
  };
  const [dropdown, showDropdown]  = useState(false);
  const onDropdownClick = ()=>{
    showDropdown(!dropdown);
  };


  return (
    <> 
    <BrowserRouter>
     
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">

          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/add">Dodaj nowe ogłoszenie</NavLink> 
            </li>  
            <li className="nav-item">
              <NavLink className="nav-link" to="/groupNotices">Znajdź ogłoszenia</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addGroupNotice" > Nowa grupa projektowa </NavLink>
            </li>
          </ul>
     
          <div>
            <input className="form-control mr-sm-2 " value={query} onChange = {updateQuery} placeholder="Szukaj"/>
          </div>
        </nav>
        <header>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home students={studentsNotices} query={query} />} />
          <Route path="/add" element={<AddNotice addNewStudentNotice={addStudentNotice} />}/>
          <Route path="/groupNotices" element={<GroupNotice groupNotices={groupNotices} query={query.toLowerCase()} />}/>
          <Route path="/addGroupNotice" element={<AddGroupNotice addNewGroupNotice={addGroupNotice} />} />
        </Routes>
      
      </main>
      </BrowserRouter>
      <footer>
        
      </footer>
    </>
  );
}

export default App;
