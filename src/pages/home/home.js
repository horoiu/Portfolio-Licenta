import React from "react";
import "./home.css";

import Background from "../../img/bg-mastHead.jpg";

const myStyles = {
    backgroundImage: `url(${Background})`,
    height: "50vh",
    backgroundSize: "cover",
};

function Home() {
    return (
        <header id="header" style={myStyles}>
            <h1>Welcome to DevSpace</h1>
            <p>This is a Portfolio project using ReactJS</p>
        </header>
    );
}

export default Home;
