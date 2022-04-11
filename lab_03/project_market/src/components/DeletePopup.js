
const DeletePopup = (props)=>{
    const {list, stateFunc, id, setVisibility } = props;
    const onClickRemoveItem = ()=>{
        list.splice(id, 1); // temporary solution, when calls to api will 
        //appear then I am gonna add aditional fields so i can later use filter
        stateFunc(list);
        setVisibility(false);
    };
    const onClickQuit = ()=>{
        setVisibility(false);
    };
    console.log(id);
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