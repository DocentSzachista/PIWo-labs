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

export const addNewGroupNotice =async (content) =>{
    try{
        await addDoc(collection(firestore, 'groupInvoices'), {
            groupName: content.groupName,
            course: content.course,
            description: content.description,
            people: content.people,
        });
    } catch(err) {
        console.log(err);
    }
};

export const readAllGroupNotices = async() =>{
    const q = query(collection(firestore, "groupInvoices"));
    const groupInvoices = [];
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            groupInvoices.push({...doc.data(), id:doc.id});
        });
    } catch (err) {
        console.log({err});
    }
    return groupInvoices;
};
export const updateGroupInvoice = async (id, content) =>{
    try{
        const groupDoc = doc(firestore, "groupInvoices", id);
        return updateDoc(groupDoc, content);
    }
    catch(err){
        console.log(err);
    }
};

export const deleteGroupInvoice = async (id) =>{
    try{
        const invoiceRef = doc(firestore, "groupInvoices", id);
        await deleteDoc(invoiceRef);
    }
    catch(err){
        console.log(err);
    } 
}