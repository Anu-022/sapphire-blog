import logo from './Assets/brandImage.png'
import {BrowserRouter as Router, Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <nav className="navigation">
                <ul className="nav-list">
                    <li className="nav-list-item logo">
                        <Link className='logo-icon' to="/"><img src={logo} alt="Brand-image" /> Sapphire Blogs</Link>
                         
                    </li>
                    <li className="nav-list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-list-item"> 
                        <Link to="/addBlog">Add Blog</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
};
 
export default Navbar;