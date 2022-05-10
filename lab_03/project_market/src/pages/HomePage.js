import { Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState, useReducer } from "react";

import { basketReducer, initialState } from "../basket/reducer";
import { UserContext } from "../context/Context";
import { fetchData} from "../api/fetchData";
import GroupNotice from "./GroupNotices";
import AddGroupNotice from "./CRUD/groupNotices/AddGroupNotice";
import SendMessage from './SendMessage';
import Header from "../components/Header";
import StudentNotices from "./StudentNotices";
import AddNotice from "./CRUD/notices/AddNotice";
import DeleteGroupNotices from "./CRUD/groupNotices/DeleteGroupNotices";
import ModifyGroupNotices from "./CRUD/groupNotices/ModifyGroupNotices";
import Basket from "./Basket";

const HomePage = () =>{

    const [basket, dispatch] = useReducer(basketReducer,initialState );
    

    const {user} = useContext(UserContext);
    console.log(user);

    const [studentsNotices, setStudentNotice] = useState([]);
    const addStudentNotice = (newStudentNotice) =>{
      setStudentNotice(studentsNotices.concat([newStudentNotice]));
    }
    const [groupNotices, setGroupNotice] = useState([]);
    const addGroupNotice = (newGroupNotice)=>{
      setGroupNotice(groupNotices.concat([newGroupNotice]));
    };
    const [query, setQuery] = useState("");
    console.log(studentsNotices);
    useEffect(  ()=>{
       fetchData('db.json').then( (data) => { 
          setStudentNotice(data.notices);
          setGroupNotice(data.groupNotices);
      });
    }, [setGroupNotice, setStudentNotice]);
  

    return(<>
        <Header query = {query} setQuery = {setQuery} />
        <Routes>
          <Route path="/" element={<StudentNotices students={studentsNotices} setStudentNotice={setStudentNotice} query={query.toLowerCase()}  dispatch = {dispatch} />} />
          <Route path="add" element={<AddNotice addNewStudentNotice={addStudentNotice} />}/>
          
          <Route path="addGroupNotice" element={<AddGroupNotice addNewGroupNotice={addGroupNotice} />} />
          <Route path="sendMessage" element= {<SendMessage />} />

          <Route path="groupNotices" element={<GroupNotice groupNotices={groupNotices} query={query.toLowerCase()} dispatch = {dispatch}/>}/>
          <Route path="groupNotices/sendGroupMessage" element= {<SendMessage />} />
          <Route path="groupNotices/delete/:id" element ={<DeleteGroupNotices list={groupNotices} set={setGroupNotice}/>}/>
          <Route path="groupNotices/edit/:id" element={<ModifyGroupNotices list={groupNotices} setList={setGroupNotice} />} />
          <Route path="basket" element={<Basket basket = {basket} dispatch = {dispatch} />}/>
        </Routes>

        </>
    );

}
export default HomePage;