import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Navbar">
            <nav className="nav-content">
                <div className="nav-link">
                    <Link to="/" className={ `${"orange-theme-color__hover"}` }>Home</Link>
                </div>
                <div className="nav-link">
                    <Link to="/resume" className={ `${"orange-theme-color__hover"}` }>Resume</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;