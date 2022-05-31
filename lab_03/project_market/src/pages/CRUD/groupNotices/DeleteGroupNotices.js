import { Link, useParams  } from "react-router-dom";
import { deleteGroupInvoice } from "../../../firebase/groupNotices";
const DeleteGroupNotices = ()=>{
    const id = useParams().id;
    console.log(id);
    const onClickRemoveItem = async ()=>{
        deleteGroupInvoice(id); 
    };

    return(
        <div className="popup-box">
        <div className="box">
            <h1> Czy chcesz usunąć wpis?</h1>
            <Link className="btn btn-danger"    to={`/home/groupNotices`} onClick={onClickRemoveItem}> Delete </Link>
            <Link className="btn btn-secondary" to={`/home/groupNotices`}>Go back</Link>
            </div>
        </div>
    )
}
export default DeleteGroupNotices;