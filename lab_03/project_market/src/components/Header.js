import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/Context";
const Header = (props) => {
    const {query, setQuery} = props;
    const {addUserToStorages} = useContext(UserContext);
    const updateQuery = (event) =>{
  
      setQuery(event.target.value);
    };
    const resetQuery = ()=>{
      setQuery("");
    }
    const logOut = () =>{
      addUserToStorages(null);
      window.location.reload();
    }
    return(
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">

          <ul className="navbar-nav mr-auto" onClick={resetQuery}>
            <li className="nav-item">
              <NavLink className="nav-link" to="">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="add">Dodaj nowe ogłoszenie</NavLink> 
            </li>  
            <li className="nav-item">
              <NavLink className="nav-link" to="groupNotices">Znajdź ogłoszenia</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="addGroupNotice" > Nowa grupa projektowa </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={logOut} > Wyloguj </Link>
            </li>
          </ul>
     
          <div>
            <input className="form-control mr-sm-2 " value={query} onChange = {updateQuery} placeholder="Szukaj"/>
           
          </div>
        </nav>
      
      </header>
    );
};
export default Header;