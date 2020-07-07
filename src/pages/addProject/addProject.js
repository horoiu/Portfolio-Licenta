import React, { Component } from "react";
import "./addProject.css";

import { MDBContainer } from "mdbreact";
import DatePicker from "react-datepicker";
import axios from "axios";

class addProject extends Component {
    constructor(props) {
        super(props);

        // initializing empty state for all form fields
        this.state = {
            name: "",
            technology: "",
            date: new Date(),
            description: "",
            link: "",
            imgS: "",
            imgB: "",
            technologies: [],
            id_technology: "",
            selectedSmallFile: null,
            selectedSmallFileName: "",
            smallFileUploaded: false,
            selectedBigFile: null,
            selectedBigFileName: "",
            bigFileUploaded: false,
        };
    }

    fetchItems = async () => {
        const data = await fetch("http://localhost:4000/technology");
        const items = await data.json();

        this.setState({ technologies: items.data });
    };

    // updates the state value depending on which input field
    // got modified by sending the 'attribute'
    handleChange = (e, attr) => {
        if (attr === "date") {
            this.setState({ date: e });
            // console.log("state.date: ", this.state);
        } else if (attr === "technology") {
            var index = e.target.selectedIndex;
            var optionElement = e.target.childNodes[index];
            var option = optionElement.getAttribute("data-id");
            this.setState({
                id_technology: option,
                technology: e.target.value,
            });
        } else {
            const newState = { ...this.state };
            newState[attr] = e.target.value;
            this.setState(newState);
        }
    };

    handleSelectChange = (technology) => {
        this.setState({ technology });
    };

    // the logic to be implemented after the form is filled and Submit button was pressed
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log("addProject, handleSubmit() this.state:", this.state);
        fetch("http://localhost:4000/addProject", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Charset: "UTF-8", // Indicates the content
            },
            body: JSON.stringify(this.state), // We send data in JSON format
        })
            .then((response) => response.json())
            .then((data) =>
                console.log("Success on writing to DataBase:", data)
            ) // Manipulate the data retrieved back, if we want to do something with it
            .catch((err) =>
                console.log("Error on writing to DataBase fetch:", err)
            ); // Do something with the error

        // redirect to "/portfolio" page after sucessfuly adding new project
        window.location.replace("/portfolio");
    };

    // check if input fields are empty and returns a boolean:
    //      if empty, the 'submit' button will be disabled
    //      we are filtering on "id_technology" for 'null' value as this is the
    //     initial selected option, and user needs to click on select button and
    //     select an technology
    isValid() {
        if (
            this.state.name === "" ||
            this.state.technology === "" ||
            this.state.id_technology === null ||
            this.state.date === "" ||
            this.state.description === "" ||
            this.state.link === "" ||
            this.state.bigFileUploaded === false ||
            this.state.smallFileUploaded === false
        ) {
            return false;
        }
        console.log("AddProject state:", this.state);
        return true;
    }

    componentWillMount() {
        this.fetchItems();
    }

    onFileSelect = (e, attr) => {
        if (attr === "imgS") {
            this.setState({
                selectedSmallFile: e.target.files[0],
                selectedSmallFileName: `imagine-S-${Date.now()}-${
                    e.target.files[0].name
                }`,
            });
        } else {
            if (attr === "imgB") {
                this.setState({
                    selectedBigFile: e.target.files[0],
                    selectedBigFileName: `imagine-B-${Date.now()}-${
                        e.target.files[0].name
                    }`,
                });
            }
        }
    };

    onFileUpload = (e, attr) => {
        const data = new FormData();
        if (attr === "imgS") {
            data.append(
                "file",
                this.state.selectedSmallFile,
                `${this.state.selectedSmallFileName}`
            );
            console.log("AddProject onFileClickHandler smallFile: ", data);
        } else {
            if (attr === "imgB") {
                data.append(
                    "file",
                    this.state.selectedBigFile,
                    `${this.state.selectedBigFileName}`
                );
            }
            console.log("AddProject onFileClickHandler bigFile: ", data);
        }

        axios
            .post("http://localhost:4000/upload", data, {
                // receive two parameter endpoint url ,form data
            })
            .then((res) => {
                // then print response status
                // console.log(res.statusText);
                if (attr === "imgS") {
                    this.setState({ smallFileUploaded: true });
                } else if (attr === "imgB") {
                    this.setState({ bigFileUploaded: true });
                }

                console.log("Response from 'FileUpload':", res.statusText);
            })
            .catch((err) => console.log("Error from 'FileUpload':", err));
    };

    render() {
        return (
            <main className="addProject container-fluid mt-5">
                <MDBContainer>
                    <h2 className="h2-responsive mt-2 mb-4">
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
                            <select
                                className="browser-default custom-select form-control input"
                                id="technology"
                                name="technology"
                                onChange={(e) =>
                                    this.handleChange(e, "technology")
                                }
                            >
                                <option>Choose a technology</option>
                                {this.state.technologies.map((item) => (
                                    <option
                                        key={item.id}
                                        data-id={item.id}
                                        value={item.technology}
                                    >
                                        {item.technology}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <DatePicker
                                className="form-control"
                                id="date"
                                name="date"
                                selected={this.state.date}
                                onChange={(e) => this.handleChange(e, "date")}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                // value={this.state.date}
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
                                onChange={(e) => this.onFileSelect(e, "imgS")}
                            ></input>
                            <button
                                type="button"
                                // check if file was selected to change the button availability
                                disabled={!this.state.selectedSmallFileName}
                                className="btn btn-primary btn-sm"
                                onClick={(e) => this.onFileUpload(e, "imgS")}
                            >
                                {/* check if file was successefully uploaded to change the button message */}
                                {!this.state.smallFileUploaded
                                    ? "Upload Avatar Image"
                                    : "File Successfully Uploaded"}
                            </button>
                        </div>
                        <div className="form-group">
                            <input
                                type="file"
                                className="form-control"
                                id="imgB"
                                name="imgB"
                                onChange={(e) => this.onFileSelect(e, "imgB")}
                            ></input>
                            <button
                                type="button"
                                // check if file was selected to change the button availability
                                disabled={!this.state.selectedBigFileName}
                                className="btn btn-primary btn-sm"
                                onClick={(e) => this.onFileUpload(e, "imgB")}
                            >
                                {/* check if file was successefully uploaded to change the button message */}
                                {!this.state.bigFileUploaded
                                    ? "Upload Project Image"
                                    : "File Successfully Uploaded"}
                            </button>
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
