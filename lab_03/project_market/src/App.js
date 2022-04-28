import { useEffect, useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import GroupNotice from "./pages/GroupNotices";
import AddGroupNotice from "./pages/CRUD/groupNotices/AddGroupNotice";
import SendMessage from './pages/SendMessage';
import Header from "./components/Header";
import Home from "./pages/Home";


import AddNotice from "./pages/CRUD/notices/AddNotice";
import DeleteGroupNotices from "./pages/CRUD/groupNotices/DeleteGroupNotices";
import ModifyGroupNotices from "./pages/CRUD/groupNotices/ModifyGroupNotices";

import fetchData from "./api/fetchData";


function App() {

  const [studentsNotices, setStudentNotice] = useState([]);
  const addStudentNotice = (newStudentNotice) =>{
    setStudentNotice(studentsNotices.concat([newStudentNotice]));
  }
  const [groupNotices, setGroupNotice] = useState([]);
  const addGroupNotice = (newGroupNotice)=>{
    setGroupNotice(groupNotices.concat([newGroupNotice]));
  };
  const [query, setQuery] = useState("");
 
  useEffect(  ()=>{
     fetchData().then( (data) => { 
       setStudentNotice(data.notices);
       setGroupNotice(data.groupNotices);
    });
  }, []);


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
