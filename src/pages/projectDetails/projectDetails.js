import React, { Component } from "react";
import "./projectDetails.css";

import isAuth from "../../services/isAuth";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class ProjectDetails extends Component {
    render() {
        const {
            imagine_mare,
            fisier_imagine,
            nume_proiect,
            prezentare,
            data_proiect,
            link,
            nume_categorie,
            id_proiect,
        } = this.props.data;
        console.log("projectDetails: this.props=", this.props.data);

        const convertDate = (date) => {
            const year = new Date(date).getFullYear();
            const month = new Date(date).getMonth();

            let data = `${month + 1}-${year}`;
            return data;
        };

        const data = convertDate(data_proiect);

        const openProject = (path) => {
            // since the 'path' is coming as an object, we need to access path.link to get the 'url'
            let win = window.open(path.link, "_blank");
            win.focus();
        };

        const deleteProject = (e, id, imagine_mare, fisier_imagine) => {
            e.preventDefault();
            console.log("Delete button - Project ID:", id);

            fetch("http://localhost:4000/delProject", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                // We convert the React state to JSON and send it as the DELETE body
                body: JSON.stringify(id, imagine_mare, fisier_imagine),
            })
                .then(function (response) {
                    return response.json();
                })
                .then((data) => {
                    console.log(
                        "Success on deleting from DataBase:",
                        data.data
                    );
                    // deleteImages(imagine_mare, fisier_imagine);
                })
                .catch((err) =>
                    console.log("Error on Delete from Database fetch:", err)
                );

            //to prevent submitting the form and hard reload after submit
            // only for development mode
            window.location.replace("/portfolio");
        };

        return (
            <main className="projectDetails mt-5 pt-4">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-lg-6 mt-5">
                            <img
                                className="project_img rounded"
                                src={`/projects-img/${imagine_mare}`}
                                alt="Project main page screenshot."
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
                                <div className="row d-flex justify-content-around my-4">
                                    {/* button is connected with isAuth.js so it will toggle  
                                    display-none and dispplay-block; will be visible
                                     only to logged-in users */}
                                    <Button
                                        className={
                                            isAuth() ? "d-block" : "d-none"
                                        }
                                        variant="danger"
                                        size="lg"
                                        onClick={(e) =>
                                            deleteProject(e, {
                                                id_proiect,
                                                fisier_imagine,
                                                imagine_mare,
                                            })
                                        }
                                    >
                                        Delete Project
                                    </Button>
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
