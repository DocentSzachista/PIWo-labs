import { useState } from "react";
import { updateUserName } from "../../firebase/users";

const UserInfo = () =>{
    const [userDisplayName, setUserDisplayName] = useState(""); 
   
    const update = () =>{
        if ( updateUserName(userDisplayName) ) {
            alert("Ustawiono nazwe uzytkownika");
        }
        else{
            alert("Coś poszło nie tak");
        }
    };
    return(
        <>
            <input onChange={(e) => setUserDisplayName(e.target.value)}></input>
            <button onClick={update}>Aktualizuj</button>
        </>
    );
};

export default UserInfo;