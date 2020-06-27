import React, { Component, useState } from "react";
import "./addProject.css";

import { MDBContainer } from "mdbreact";
import DatePicker from "react-datepicker";
import Select from "./technology";

class addProject extends Component {
    constructor(props) {
        super(props);

        // inintializind empty state for 'user' and 'pass'
        this.state = {
            name: "",
            technology: "",
            date: "",
            startDate: Date.now(),
            description: "",
            link: "",
            imgS: "",
            imgB: "",
        };
    }

    // updates the state value depending on which input field
    // got modified by sending the 'attribute'
    handleChange = (e, attr) => {
        if (attr === "date") {
            console.log(e);
            this.setState({
                startDate: e,
            });
        } else {
            const newState = { ...this.state };
            newState[attr] = e.target.value;
            this.setState(newState);
        }
    };

    // the logic to be implemented after the form is filled and Submit button was pressed
    handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `The data you entered is: 
            Project name: ${this.state.name} 
            Tehnology: ${this.state.technology} 
            Date: ${this.state.startDate}
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
            this.state.startDate === "" ||
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
            <main className="addProject container-fluid mt-5">
                <MDBContainer>
                    <h2 className="h2-responsive mt-3 mb-5">
                        Add new project to your Portfolio
                    </h2>
                    <form
                        className="col-xl-6 col-md-8 col-sm-8 mt-3 mb-2 py-4 hoverable"
                        id="addProject-form"
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
                            <Select
                                onChange={(e) =>
                                    this.handleChange(e, "technology")
                                }
                                value={this.state.technology}
                            ></Select>
                        </div>
                        <div className="form-group">
                            <DatePicker
                                className="form-control"
                                id="date"
                                name="date"
                                selected={this.state.startDate}
                                onChange={(e) => this.handleChange(e, "date")}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                value={this.state.startDate}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                type="text"
                                className="form-control"
                                id="description"
                                name="description"
                                placeholder="Description"
                                onChange={(e) =>
                                    this.handleChange(e, "description")
                                }
                                value={this.state.description}
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="link"
                                name="link"
                                placeholder="Link"
                                onChange={(e) => this.handleChange(e, "link")}
                                value={this.state.link}
                            ></input>
                        </div>
                        <div className="form-group">
                            <input
                                type="file"
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
                                type="file"
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
