import {useState, useMemo } from "react";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';



import Login from "./pages/Authentication/Login";

import Register from "./pages/Authentication/Register";
import HomePage from "./pages/HomePage";
import { UserContext } from "./context/Context";
import { useLocalStorage } from "./UseLocalStorage";

import { auth } from "./firebase/init";
import { useAuthState } from "react-firebase-hooks/auth";
function App() {
  const [user, setUser] = useState(null);
  const [userStorage, setUserStorage] = useLocalStorage("user", null);


  const addUserToStorages = (value) =>{
          setUser(value);
          setUserStorage(value);
  };

  const value = useMemo( () => ({user, addUserToStorages} ), [user, addUserToStorages]);
  return (
    <> 
    <BrowserRouter>
      
      <main>
      <UserContext.Provider value={value}>
        <Routes>
          {/* Jeżeli uzytkownik jest to wywolaj buttona a inaczej zrob przekierowanie */}
          
          <Route path="/" element={ userStorage !== null 
                                                ? <Navigate to="/home"/>  
                                                : <Login/>}/> 
          <Route path="/register" element={ userStorage !==null ? <Navigate to="/home"/> : <Register />} />
          <Route path="/home/*" element={ userStorage !== null ?  <HomePage /> : <Navigate to="/" /> } />
        </Routes>
      </UserContext.Provider>
      </main>
      </BrowserRouter>
      <footer>
        All rights reserved czy cos 
      </footer>
    </>
  );
}

export default App;
