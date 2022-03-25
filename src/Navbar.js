import "./css/Navbar.css";
import { UserContext } from "./App";
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { theme, modeStyles } = useContext(UserContext);

    // State to manage the current page (highlight current page in the Navbar)
    const [page, setPage] = useState(`home`);

    // Define the current active link styles
    const activeStyles = {
        color: `var(--${theme}-theme-color)`,
    };

    return (
        <div className={ `Navbar` }>
            <nav className={ `nav-content` }>
                <div className="nav-link">
                    <Link to="/" className={ `${theme}-theme-color__hover` } onClick={ () => setPage(`home`) } style={ page === `home` ? activeStyles : modeStyles }>Home</Link>
                </div>
                <div className="nav-link">
                    <Link to="/resume" className={ `${theme}-theme-color__hover` } onClick={ () => setPage(`resume`) } style={ page === `resume` ? activeStyles : modeStyles }>Resume</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;