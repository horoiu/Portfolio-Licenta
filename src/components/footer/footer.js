import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const year = new Date().getFullYear();
function Footer() {
    return (
        <footer className="footer fixed-bottom">
            <p>
                ©{year} <Link to="/"> DevSpace.ro</Link>. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
