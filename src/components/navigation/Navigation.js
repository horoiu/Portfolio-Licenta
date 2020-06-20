import React from "react";
import "./navigation.css";

import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="navigation">
            <Link to="/">
                <h3>DevSpace</h3>
            </Link>
            <ul className="nav-links">
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/portfolio">
                    <li>Portfolio</li>
                </Link>
                <Link to="/resume">
                    <li>Resume</li>
                </Link>
                <Link to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Navigation;
