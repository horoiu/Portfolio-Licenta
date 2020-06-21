import React from "react";
import "./navigation.css";

import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navigation fixed-top mb-5">
            <NavLink to="/">
                <h3>DevSpace</h3>
            </NavLink>
            <ul className="nav-links">
                <NavLink to="/about" activeClassName="active">
                    <li>About</li>
                </NavLink>
                <NavLink to="/portfolio" activeClassName="active">
                    <li>Portfolio</li>
                </NavLink>
                <NavLink to="/resume" activeClassName="active">
                    <li>Resume</li>
                </NavLink>
                <NavLink to="/contact" activeClassName="active">
                    <li>Contact</li>
                </NavLink>
            </ul>
        </nav>
    );
}

export default Navigation;
