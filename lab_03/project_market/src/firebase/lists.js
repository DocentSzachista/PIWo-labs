import { firestore } from "./init";
import {
    collection, 
    addDoc,  
    query,
    where, 
    getDocs, 
    updateDoc,
    deleteDoc,
    doc
} from 'firebase/firestore';

export const  addNewNotice = async (user, values) =>{
    // console.log(values.image);
    try{
        await addDoc(collection(firestore, 'studentInvoices'), {
            email: user.email,
            firstname: values.firstname,
            description: values.description,
            tags: values.tags,
            courses: values.courses,
            img: values.img
        });
    } catch(err) {
        console.log(err);
    }
};
export const readAllStudentNotices = async(user) =>{
    const q = query(collection(firestore, "studentInvoices"), where("email", "==", user.email));
    const todos = [];
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            todos.push({...doc.data(), id:doc.id});
        });
    } catch (err) {
        console.log({err});
    }
    console.log(todos);
    return todos;
};
export const updateInvoice = async (id, content) =>{
    try{
    const groupDoc = doc(firestore, "studentInvoices", id);
    return updateDoc(groupDoc, content);
    }
    catch(err){
        console.log(err);
    }
};

export const deleteInvoice = async (user, id) =>{
    try{
        const invoiceRef = doc(firestore, "studentInvoices", id);
        await deleteDoc(invoiceRef);
    }
    catch(err){
        console.log(err);
    } 
}