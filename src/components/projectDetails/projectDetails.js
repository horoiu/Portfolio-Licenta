import React, { Component } from "react";
import "./projectDetails.css";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

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
            nume_categorie,
        } = this.props.data;
        // console.log("projectDetails: this.props=", this.props.data);

        const convertDate = (date) => {
            let year = new Date(date).getFullYear();
            let month = new Date(date).getMonth();
            let day = new Date(date).getDay();

            let data = `${day}-${month}-${year}`;
            return data;
        };

        const data = convertDate(data_proiect);

        const openProject = (path) => {
            // since the 'path' is coming as an object, we need to access path.link to get the 'url'
            let win = window.open(path.link, "_blank");
            win.focus();
        };

        return (
            <main className="projectDetails mt-5 pt-4">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-md-5 mt-5">
                            <img
                                className="project_img"
                                src={`https://devspace.ro/Portfolio/Portfolio/images/projects/${imagine_mare}`}
                            ></img>
                        </div>
                        <div className="col-md-7 mb-4">
                            <div className="p-4">
                                <h1 className="mb-3 mt-3">{nume_proiect}</h1>
                                <h3>
                                    <span className="font-weight-bold">
                                        Date:{"  "}
                                    </span>
                                    {data}
                                </h3>
                                <h3>Technology: {nume_categorie}</h3>

                                <h3>{link}</h3>
                                <h3>{prezentare}</h3>
                                <div className="row d-flex justify-content-around my-4">
                                    <Button
                                        variant="success"
                                        size="lg"
                                        className="waves-effect"
                                        onClick={() => openProject({ link })}
                                    >
                                        Run Project
                                    </Button>
                                    <Link
                                        to={`/portfolio`}
                                        className="btn btn-primary btn-lg"
                                    >
                                        Go back to Portfolio page
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default ProjectDetails;
