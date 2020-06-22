import React, { Component } from "react";
import "./projectDetails.css";

import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class ProjectDetails extends Component {
    render() {
        const {
            imagine_mare,
            nume_proiect,
            prezentare,
            data_proiect,
            link,
            nume_categorie,
        } = this.props.data;
        // console.log("projectDetails: this.props=", this.props.data);

        const convertDate = (date) => {
            const year = new Date(date).getFullYear();
            const month = new Date(date).getMonth();

            let data = `${month}-${year}`;
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
                        <div className="col-lg-6 mt-5">
                            <img
                                className="project_img"
                                src={`https://devspace.ro/Portfolio/Portfolio/images/projects/${imagine_mare}`}
                                alt="Project main page scrrenshot."
                            ></img>
                        </div>

                        <div className="col-lg-6 mb-4">
                            <div className="p-4">
                                <h2 className="text-center text-md-left product-name font-weight-bold mb-1 ml-xl-0 ml-4 ">
                                    <strong>{nume_proiect}</strong>
                                </h2>
                                <hr />
                                <p className="ml-xl-0 ml-4 text-md-left">
                                    {prezentare}
                                </p>
                                <hr />
                                <p className="ml-xl-0 ml-4 text-md-left">
                                    <strong>Technology: </strong>
                                    {nume_categorie}
                                </p>
                                <p className="ml-xl-0 ml-4 text-md-left">
                                    <strong>Date: </strong>
                                    {data}
                                </p>
                                <hr />
                                <div className="row d-flex justify-content-around my-4">
                                    <Button
                                        variant="success"
                                        size="lg"
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
