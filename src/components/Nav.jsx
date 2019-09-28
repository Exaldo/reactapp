import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';


const Nav = () => {

    return (
        <nav>
            <h4>Logo</h4>
            <ul className="nav-links">
            
            <Link className="link_style">
            <li>Gallery</li>
            </Link>

            <Link className="link_style">
            <li>About</li>
            </Link>

            <Link className="link_style">
            <li>Users</li>
            </Link>
            
            
            </ul>
        </nav>
    )


};

export default Nav;