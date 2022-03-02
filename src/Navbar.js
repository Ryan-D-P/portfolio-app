import "./Navbar.css";
import { UserContext } from "./App";
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { theme, mode } = useContext(UserContext);

    // State to manage the current page (highlight current page in the Navbar)
    const [page, setPage] = useState(`home`);

    return (
        <div className={ `Navbar ${mode}` }>
            <nav className={ `nav-content` }>
                <div className="nav-link">
                    <Link to="/" className={ `${theme}-theme-color__hover ${page === `home` ? `${theme}-theme-color` : ``}` } onClick={ () => setPage(`home`) }>Home</Link>
                </div>
                <div className="nav-link">
                    <Link to="/resume" className={ `${theme}-theme-color__hover ${page === `resume` ? `${theme}-theme-color` : ``}` } onClick={ () => setPage(`resume`) }>Resume</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;