import React from "react";
import { Link } from "react-router-dom";

import "./notFound.css";

function notFound(props) {
    return (
        <div className="notFound pt-5">
            <h1 className="h1-responsive mt-5 bold text-black">404</h1>
            <h2 className="h2-responsive mt-2 bold">Page Not Found</h2>
            <br></br>
            <h4 className="h4-responsive">
                The page <span>"{props.location.pathname}"</span> does not
                exist!
            </h4>
            <h5 className="h5-responsive">
                Would you like to return to<Link to="/"> HomePage </Link>
                instead?
            </h5>
        </div>
    );
}

export default notFound;
