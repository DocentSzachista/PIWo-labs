import GroupNoticesForm from "../../../components/GroupNoticesForm";
import { useParams } from "react-router-dom";
const ModifyGroupNotices= (props)=>{
    const {list, setList} = props;
    const id = parseInt(useParams().id);
    const onSubmit = async values =>{
        const ppl = values.people.trim().split(";");
        const emails = values.emails.trim().split(" ");
        const dataToSet = {
            groupName: values.groupName,
            course: values.course,
            description: values.description,
            people: emails.map( (email, it) =>({email, name: ppl[it]} ) ),
        };
        list[id] = dataToSet;
        setList(list);
        alert("Zmodyfikowano");
    }
    return(
        <GroupNoticesForm element={list[id]} isEdit={true} title={"Modyfikuj dane o grupie"} onSubmit={onSubmit} />
    );
}; 
export default ModifyGroupNotices;