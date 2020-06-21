import React, { Component } from "react";
import "./projectDetails.css";

class ProjectDetails extends Component {
    render() {
        const {
            id_proiect,
            fisier_imagine,
            imagine_mare,
            id_categ,
            nume_proiect,
            prezentare,
            data_proiect,
            link,
        } = this.props.data;
        // console.log("projectDetails: this.props=", this.props.data);

        return (
            <div>
                <h1>{nume_proiect}</h1>
                <h3>{data_proiect}</h3>
                <h3>ID Proiect = {id_proiect}</h3>
                <h3>ID Categorie = {id_categ}</h3>
                <h3>{fisier_imagine}</h3>
                <h3>{imagine_mare}</h3>
                <h3>{link}</h3>
                <h3>{prezentare}</h3>
                <button>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </button>
                <button onClick={() => window.history.back()}>
                    Go back to Portfolio page
                </button>
            </div>
        );
    }
}

export default ProjectDetails;
