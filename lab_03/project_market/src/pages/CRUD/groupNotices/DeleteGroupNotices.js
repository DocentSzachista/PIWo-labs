import { Link, useParams  } from "react-router-dom";
const DeleteGroupNotices = (props)=>{
    const {list, set} = props;
    const id = parseInt(useParams().id);

    const onClickRemoveItem = ()=>{
        list.splice(id, 1); // temporary solution, when calls to api will 
        //appear then I am gonna add aditional fields so i can later use filter
        set(list);
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