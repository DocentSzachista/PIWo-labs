import { updateInvoice } from "../../../firebase/lists";
import { useLocation } from "react-router-dom";
import AddStudentNoticeForm from "../../../components/AddStudentNoticeForm";
const EditNotice = () =>{
    const location = useLocation();
    const studentNotice = location.state;
    console.log(studentNotice);
     studentNotice.tags = studentNotice.tags.join(" ");
     studentNotice.courses =studentNotice.courses.join(";");
    const onSubmit = async values =>{
        // const image =await fetchImage("https://picsum.photos/70/100");
        const dataToSet = {
            firstname: values.firstname,
            description: values.description,
            tags: values.tags.trim().split(" "),
            courses: values.courses.trim().split(";"),
        };
        await updateInvoice( studentNotice.id, dataToSet);
        alert("Zaaktualizowano ogłoszenie");
        
    };
    const validate = values =>{
        return {};
    }

    return(
        <AddStudentNoticeForm 
        studentNotice={studentNotice} 
        validate={validate} 
        onSubmit={onSubmit} 
        submitText={"Zaaktualizuj ogłoszenie"} 
        />
    );
}
export default EditNotice;