import { deleteInvoice } from "../firebase/lists";
import { auth } from "../firebase/init";
import { useAuthState } from "react-firebase-hooks/auth";
const DeletePopup = (props)=>{
    const user =useAuthState(auth);
    const {list, stateFunc, id, setVisibility } = props;
    const onClickRemoveItem = ()=>{
        // list.splice(id, 1); // temporary solution, when calls to api will 
        //appear then I am gonna add aditional fields so i can later use filter
        // stateFunc(list);
        deleteInvoice(user ,id);
        setVisibility(false);
        // window.location.reload(true);
    };
    const onClickQuit = ()=>{
        setVisibility(false);
    };
    return(
    <div className="popup-box">
        <div className="box">
            <h1> Czy chcesz usunąć wpis?</h1>
            <button className="btn btn-danger" onClick={onClickRemoveItem}> Delete </button>
            <button className="btn btn-secondary" onClick={onClickQuit}>Go back</button>
        </div>
    </div>
    );


};

export default DeletePopup;