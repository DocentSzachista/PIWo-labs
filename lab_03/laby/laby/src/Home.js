import { useState } from "react";

const Home = (props)=>{
    const {setToDos, toDos} = props;
    const [newToDo, setNewToDo] = useState("");
    // map ( obiekt po ktorym sie iteruje, indeks od 0 do inf, wszystkie lementy danej listy)
    const todoHtml = toDos.map((it, i) =>{
        return <p key={i}>{it}</p>
      });
    const handleNewInput = (event)=>{
        setNewToDo(event.target.value);
      };
    const handleNewToDo =(event) =>{
        setToDos(toDos.concat([newToDo]));
        setNewToDo("");
    }

    return(
    <>
    <input value={newToDo} onChange={handleNewInput} />
    <button  onClick={handleNewToDo}> Add new TODO</button> 
    {todoHtml}
    </>
    );
};

export default Home; 