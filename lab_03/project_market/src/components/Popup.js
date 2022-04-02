import { useEffect } from "react";

const Popup = (props) =>{
    useEffect( () =>{
        const timer = setTimeout( ()=> props.updatePopup(), 2000 );
        return () => clearTimeout(timer);
    }, []);
    return(
        <div className="popup-box">
            <div className="box">
                <h1> Wysłano </h1>
            </div>
        </div>
    );

};
export default Popup;