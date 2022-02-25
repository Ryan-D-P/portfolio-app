import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Navbar">
            <nav className="nav-content">
                <div className="nav-link">
                    <Link to="/">Home</Link>
                </div>
                <div className="nav-link">
                    <Link to="/resume">Resume</Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;