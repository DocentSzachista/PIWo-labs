import { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import GroupNotice from "./pages/GroupNotices";
import AddGroupNotice from "./pages/CRUD/groupNotices/AddGroupNotice";
import SendMessage from './pages/SendMessage';
import Header from "./components/Header";
import Home from "./pages/Home";
import AddNotice from "./pages/CRUD/notices/AddNotice";


import DeleteGroupNotices from "./pages/CRUD/groupNotices/DeleteGroupNotices";
import ModifyGroupNotices from "./pages/CRUD/groupNotices/ModifyGroupNotices";
function App() {

  const [studentsNotices, setStudentNotice] = useState([
    {
      name: "Jan Kowalski",
      email: "jan.kowalski@gmail.com",
      description: "Lorem ipsum non lectus tincidunt. Etiam dictum ligula sed arcu mollis fringilla. ",
      tags: ["front-end", "back-end"],
      courses: ["Projekt zespołowy", "Projektowanie interfejsów webowych"]
    },
    {
      name: "Jan Wolski",
      email: "jan.wolski@gmail.com",
      description: "Lorem ipsum non lectus tincidunt. Etiam dictum ligula sed arcu mollis fringilla. ",
      tags: ["front-end", "back-end", "database"],
      courses: ["Bazy danych 2", "Projektowanie interfejsów webowych"]
    },
    {
      name: "Jutland",
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
        people: [
                  { name: "Zbychu", email: "dupa@gmail.com"}, 
                  { name:"Krzesiwo", email: "krzak@gmail.com"},
                  { name:"Warzone", email: "kitku@gmail.com"},
                ],
        course: "Magiczne zwierzaki",
        description: "Lorem ipsum non lectus tincidunt. Etiam dictum ligula sed arcu mollis fringilla. ",
        
    },
    {
        groupName: "Buzdygan",
        people: [
                  { name: "Krzemień", email: "dupa@gmail.com"}, 
                  { name: "Waldo", email: "waldo@gmail.com"},
                  { name: "kilkutron", email: "dupa@gmail.com"},
                ],
        course: "Projekt zespołowy",
        description: "Lorem ipsum non lectus tincidunt. Etiam dictum ligula sed arcu mollis fringilla. ",
    },
  ]);
  const addGroupNotice = (newGroupNotice)=>{
    setGroupNotice(groupNotices.concat([newGroupNotice]));
  };
  const [query, setQuery] = useState("");
 



  return (
    <> 
    <BrowserRouter>
      <Header query = {query} setQuery = {setQuery} />
      <main>
        <Routes>
          <Route path="/" element={<Home students={studentsNotices} setStudentNotice={setStudentNotice} query={query} />} />
          <Route path="/add" element={<AddNotice addNewStudentNotice={addStudentNotice} />}/>
          <Route path="/groupNotices" element={<GroupNotice groupNotices={groupNotices} query={query.toLowerCase()} />}/>
          <Route path="/addGroupNotice" element={<AddGroupNotice addNewGroupNotice={addGroupNotice} />} />
          <Route path="/sendMessage" element= {<SendMessage />} />
          <Route path="/sendGroupMessage/" element= {<SendMessage />} />
          <Route path="/groupNotices/delete/:id" element ={<DeleteGroupNotices list={groupNotices} set={setGroupNotice}/>}/>
          <Route path="/groupNotices/edit/:id" element={<ModifyGroupNotices list={groupNotices} setList={setGroupNotice} />} />
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
