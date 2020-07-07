import React from "react";
import "./about.css";

function TeamPage() {
    return (
        <main className="about py-5 mt-5">
            <div className="container text-center pb-5">
                <p>Hello stranger! We are a </p>
                <p>
                    {" "}
                    <span>design </span>agency which
                </p>
                <p>
                    brings <span> dreams</span> to life !!!
                </p>
            </div>
            <div className="container text-center pt-5 mt-5">
                <p className="about-name mt-5">
                    Step into <span> &#394;ev&#423;pace</span>
                </p>
            </div>
        </main>
    );
}

export default TeamPage;
