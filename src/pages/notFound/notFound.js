import React from "react";
import { Link } from "react-router-dom";

// This can also be a functional component since we do not use state

function notFound(props) {
    return (
        <div className="notFound">
            <h2>Page Not Found</h2>
            <br></br>
            <h4>The page "{props.location.pathname}" does not exist!</h4>
            <p>
                Would you like to return to<Link to="/"> HomePage </Link>
                instead?
            </p>
        </div>
    );
}

export default notFound;
