import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const year = new Date().getFullYear();
function Footer() {
    return (
        <footer className="footer">
            <h5>
                ©{year} <Link to="/"> DevSpace.ro</Link>. All rights reserved.
            </h5>
        </footer>
    );
}

export default Footer;
