import GroupNoticesForm from "../../../components/GroupNoticesForm";
import { useParams } from "react-router-dom";
import { updateGroupInvoice } from "../../../firebase/groupNotices";
const ModifyGroupNotices= (props)=>{
    const {list, setList} = props;
    const id = useParams().id;
    const element = list.filter((iterator) => iterator.id === id)[0];
    console.log(element);
    const onSubmit = async values =>{
        const ppl = values.people.trim().split(";");
        const emails = values.emails.trim().split(" ");
        const dataToSet = {
            groupName: values.groupName,
            course: values.course,
            description: values.description,
            people: emails.map( (email, it) =>({email, name: ppl[it]} ) ),
        };
        await updateGroupInvoice(id, dataToSet);
        alert("Zmodyfikowano");
    }
    return(
        
        <GroupNoticesForm element={element} isEdit={true} title={"Modyfikuj dane o grupie"} onSubmit={onSubmit} />
    );
}; 
export default ModifyGroupNotices;