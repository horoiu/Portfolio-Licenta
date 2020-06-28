import React, { useState, useEffect } from "react";
import "./project.css";
import ProjectDetails from "../projectDetails/projectDetails";

function Project({ match }) {
    // useEfect() is used to run the fechItem function once the Project component is mounted
    useEffect((match) => {
        fetchItem();
    }, []);

    // initialising state with an empty object
    const [item, setItem] = useState({});

    const id = parseInt(match.params.id_proiect);

    const fetchItem = async () => {
        const data = await fetch("http://localhost:4000/projects");
        const item = await data.json();

        item.data.forEach((elem) => {
            if (elem.id_proiect === id) {
                setItem(elem);
            }
        });
    };

    return (
        <div>
            <ProjectDetails data={item} />
        </div>
    );
}

export default Project;
