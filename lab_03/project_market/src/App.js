import { useState } from "react";
import Home from "./pages/Home";
import AddNotice from "./pages/AddNotice";
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import GroupNotice from "./pages/GroupNotices";
import AddGroupNotice from "./pages/AddGroupNotice";
import SendMessage from './pages/SendMessage';
import Header from "./components/Header";
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



  return (
    <> 
    <BrowserRouter>
      <Header query = {query} updateQuery = {updateQuery} />
      <main>
        <Routes>
          <Route path="/" element={<Home students={studentsNotices} query={query} />} />
          <Route path="/add" element={<AddNotice addNewStudentNotice={addStudentNotice} />}/>
          <Route path="/groupNotices" element={<GroupNotice groupNotices={groupNotices} query={query.toLowerCase()} />}/>
          <Route path="/addGroupNotice" element={<AddGroupNotice addNewGroupNotice={addGroupNotice} />} />
          <Route path="/sendMessage/:id" element= {<SendMessage />} />
        </Routes>
      </main>
      </BrowserRouter>
      <footer>
        All rights reserved czy cos 
      </footer>
    </>
  );
}

export default App;
