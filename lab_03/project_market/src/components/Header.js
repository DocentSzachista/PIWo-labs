import { NavLink } from "react-router-dom";
const Header = (props) => {
    const {query, updateQuery} = props;
    return(
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">

          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/add">Dodaj nowe ogłoszenie</NavLink> 
            </li>  
            <li className="nav-item">
              <NavLink className="nav-link" to="/groupNotices">Znajdź ogłoszenia</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addGroupNotice" > Nowa grupa projektowa </NavLink>
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