import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const year = new Date().getFullYear();
function Footer() {
    return (
        <div className="footer">
            <h5>
                ©{year} <Link to="/"> DevSpace.ro </Link>. All rights reserved.
            </h5>
        </div>
    );
}

export default Footer;
