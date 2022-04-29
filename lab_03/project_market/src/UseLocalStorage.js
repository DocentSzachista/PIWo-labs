import { useState } from "react";

export const  useLocalStorage = (key, initValue ) =>{
    const [storedValue, setStoredValue] = useState( () =>{
        if(typeof window === "undefined"){
            return initValue;
        }

        try{
            const item  = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initValue;
        }
        catch(error){
            console.log(error);
            return initValue;
        }
    });     
    const setValue = (value) =>{
        try {
            const valueToStore =
              value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);

            if (typeof window !== "undefined") {
              window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
          } catch (error) {
            console.log(error);
          }  
    };
    return [storedValue, setValue]
};
