import "./Navbar.css";
import { UserContext } from "./App";
import { useContext } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { theme } = useContext(UserContext);

    return (
        <div className="Navbar">
            <nav className="nav-content">
                <div className="nav-link">
                    <Link to="/" className={ `${`${theme}-theme-color__hover`}` }>Home</Link>
                </div>
                <div className="nav-link">
                    <Link to="/resume" className={ `${`${theme}-theme-color__hover`}` }>Resume</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;