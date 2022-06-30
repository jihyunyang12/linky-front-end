import React from "react";
import { NavLink } from "react-router-dom";

import './NavLinks.css'

const NavLinks = props => {
    return <ul className="nav-links">
        <li>
            <NavLink to="/">My Links</NavLink>
        </li>
        <li>
            <NavLink to="/newlink">New Link</NavLink>
        </li>
    </ul>
}

export default NavLinks;