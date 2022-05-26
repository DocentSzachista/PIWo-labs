import { auth, firestore } from "./init";
import { 
    createUserWithEmailAndPassword,
    updateProfile  
} from "firebase/auth";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import {
    setDoc,
    getDoc,
    doc,
    } from "firebase/firestore";

const googleProvider = new GoogleAuthProvider();

export const logInWithGoogle = async () => {
    try {
        const response = await signInWithPopup(auth, googleProvider);
        const user = response.user;
        const q = doc(firestore, "users", user.uid);
        const docs = await getDoc(q);
        if ( ! docs.exists()) {
            await setDoc(q, {
                name: user.displayName,
                authProvider: "google",
                email: user.email
            });
        }

    } catch (err) {
        console.error({err});
        alert(err.message);
    }
};


export const logout = () => {
    signOut(auth);
};

export const singup = (email, password  ) =>{
    return createUserWithEmailAndPassword(auth, email, password)
    .then( (userCredential) => { 
    const user = userCredential.user;
    user.displayName = "Nie ustawiono";
    return true;
    })
 .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(`${errorCode} \n ${errorMessage}`);
    return false;
});
}

export const updateUserName = (username) =>{
    return updateProfile(auth.currentUser, {
        displayName: username      
    }).then(() => {
        return true;
      }).catch((error) => {
        return false;
      });
}
        