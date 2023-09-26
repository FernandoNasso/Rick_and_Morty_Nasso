import SearchBar from "./SearchBar/SearchBar";
import style from "./Nav.module.css";
import {NavLink} from "react-router-dom";


    
const Nav = ({onSearch, setAccess}) => {
    const handleLogOut = () => {
        setAccess(false)    
    }
    return (
        <nav className={style.Nav}>
            
            <button>
                <NavLink to="/about">ABOUT</NavLink>
            </button>
            <button>
                <NavLink to="/home">HOME</NavLink>
            </button>
            <button>
                <NavLink to="/favorites">FAVORITES</NavLink>
            </button>
            <button onClick = {handleLogOut}>LOG OUT</button>
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}

export default Nav;