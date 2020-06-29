import React from "react";
import { Link } from "react-router-dom";

import "./notFound.css";

// This can also be a functional component since we do not use state

function notFound(props) {
    return (
        <div className="notFound pt-5">
            <h1 className="h1-responsive mt-5 bold">Page Not Found</h1>
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
