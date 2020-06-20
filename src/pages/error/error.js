import React from "react";
import { Link } from "react-router-dom";

function Error(msg) {
    return (
        <div className="error">
            <h2>ERROR Page</h2>
            <br></br>
            <h4>There is an error: "{msg}" !</h4>
            <p>
                Would you like to return to<Link to="/"> HomePage </Link> page
                instead?
            </p>
        </div>
    );
}

export default Error;
