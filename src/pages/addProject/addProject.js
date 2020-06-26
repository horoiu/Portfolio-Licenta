import React, { Component, useState } from "react";
import "./addProject.css";

import { MDBContainer } from "mdbreact";

class addProject extends Component {
    constructor(props) {
        super(props);

        // inintializind empty state for 'user' and 'pass'
        this.state = {
            name: "",
            technology: "",
            date: "",
            description: "",
            link: "",
            imgS: "",
            imgB: "",
        };
    }

    // updates the state value depending on which input field
    // got modified by sending the 'attribute'
    handleChange = (e, attr) => {
        const newState = { ...this.state };
        newState[attr] = e.target.value;
        this.setState(newState);
    };

    // the logic to be implemented after the form is filled and submit button was pressed
    handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `The data you entered is: 
            Project name: ${this.state.name} 
            Tehnology: ${this.state.technology} 
            Date: ${this.state.date}
            Description: ${this.state.description}
            Link: ${this.state.link}
            Image small: ${this.state.imgS}
            Image big: ${this.state.imgB}`
        );
    };

    // check if input fields are empty and returns a boolean:
    //      if empty, the 'submit' button will be disabled
    isValid() {
        if (
            this.state.name === "" ||
            this.state.technology === "" ||
            this.state.date === "" ||
            this.state.description === "" ||
            this.state.link === "" ||
            this.state.imgS === "" ||
            this.state.imgB === ""
        ) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <main className="log-in container-fluid mt-5">
                <MDBContainer>
                    <h3>Add new project to your Portfolio</h3>
                    <form
                        className="col-xl-6 col-md-6 col-sm-6 mt-3 mb-5 py-4 hoverable"
                        id="logIn-form"
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Project name"
                                onChange={(e) => this.handleChange(e, "name")}
                                value={this.state.name}
                            ></input>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="technology"
                                name="technology"
                                placeholder="Technology"
                                onChange={(e) =>
                                    this.handleChange(e, "technology")
                                }
                                value={this.state.technology}
                            ></input>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="date"
                                name="date"
                                placeholder="Date"
                                onChange={(e) => this.handleChange(e, "date")}
                                value={this.state.date}
                            ></input>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                name="description"
                                placeholder="description"
                                onChange={(e) =>
                                    this.handleChange(e, "description")
                                }
                                value={this.state.description}
                            ></input>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="link"
                                name="link"
                                placeholder="link"
                                onChange={(e) => this.handleChange(e, "link")}
                                value={this.state.link}
                            ></input>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="imgS"
                                name="imgS"
                                placeholder="Small image"
                                onChange={(e) => this.handleChange(e, "imgS")}
                                value={this.state.imgS}
                            ></input>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="imgB"
                                name="imgB"
                                placeholder="Big image"
                                onChange={(e) => this.handleChange(e, "imgB")}
                                value={this.state.imgB}
                            ></input>
                        </div>
                        <button
                            // check if input fields are empty and returns a boolean:
                            //      if empty, the 'submit' button will be disabled
                            disabled={!this.isValid()}
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                            Add Project
                        </button>
                    </form>
                </MDBContainer>
            </main>
        );
    }
}

export default addProject;
