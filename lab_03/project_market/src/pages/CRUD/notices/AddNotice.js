
import "../../../styles/form.css";
import { fetchImage } from '../../../api/fetchData';
import {  addNewNotice } from '../../../firebase/lists';
import { auth } from '../../../firebase/init';
import { useAuthState } from 'react-firebase-hooks/auth';
import AddStudentNoticeForm from '../../../components/AddStudentNoticeForm';

const AddNotice = (props)=>{
    const [user] = useAuthState(auth);
    const {addNewStudentNotice} = props;
    const studentNotice = {
        firstname: "",
        email: "",
        description: "",
        tags: "",
        courses: ""
      };
    const onSubmit = async values =>{
        const image =await fetchImage("https://picsum.photos/70/100");
        const dataToSet = {
            firstname: values.firstname,
            description: values.description,
            tags: values.tags.trim().split(" "),
            courses: values.courses.trim().split(";"),
            img: image
        };
        console.log(image);
        await addNewNotice( user, dataToSet);
        alert("Dodano nowe ogłoszenie");
        
    };
    const validate = values =>{
        return {};
    };
    return (
        <AddStudentNoticeForm 
        studentNotice={studentNotice} 
        validate={validate} 
        onSubmit={onSubmit} 
        submitText={"Dodaj nowe ogłoszenie"} 
        />
    );
};
export default AddNotice;