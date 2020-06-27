import React, { Component, useState } from "react";
import "./logIn.css";

import * as Cookies from "../../services/cookies";
// import { browserHistory } from "react-router-dom";
import { MDBContainer } from "mdbreact";

class LogIn extends Component {
    constructor(props) {
        super(props);
        // inintializind empty state for 'user' and 'password'
        this.state = {
            user: "",
            password: "",
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
        console.log("Log-In, handleSubmit() this.state:", this.state);
        fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(this.state),
        })
            .then(function (response) {
                return response.json();
            })
            .then((data) => {
                let response = data.data[0];
                // console.log("Response 'login fetch':", response);
                if (!response) {
                    console.log("No response from 'login fetch'.");
                    console.log("No matches. REJECTED");

                    // go set cookie for NOT LOGED-IN
                } else {
                    console.log(
                        this.state.user,
                        this.state.password,
                        response.user,
                        response.password
                    );
                    if (
                        response.user === this.state.user &&
                        response.password === this.state.password
                    ) {
                        console.log("Name and password matches. LOGED-IN");
                        // go set cookie for LOGED-IN
                        Cookies.setCookie("portfolio-app", "loged-in", 1);

                        // redirect to HomePage after sucessfuly Log-in
                    } else {
                        console.log("No matches. REJECTED");
                        // go set cookie for NOT LOGED-IN
                    }
                }
            })
            .catch((err) => console.log("Error from 'login fetch':", err));

        //to prevent submitting the form and hard reload after submit
        // only for development mode
        e.preventDefault();
    };

    // check if input fields are empty and returns a boolean:
    //      if empty, the 'submit' button will be disabled
    isValid() {
        if (this.state.user === "" || this.state.password === "") {
            return false;
        }
        return true;
    }

    render() {
        return (
            <main className="log-in container-fluid mt-5">
                <MDBContainer>
                    <h2 className="h2-responsive">Log In</h2>
                    <form
                        className="col-xl-4 col-lg-5 col-md-6 col-sm-8 mt-3 mb-5 py-4 hoverable"
                        id="logIn-form"
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                id="user"
                                name="user"
                                placeholder="Username"
                                onChange={(e) => this.handleChange(e, "user")}
                                value={this.state.user}
                            ></input>
                        </div>
                        <div className="form-group">
                            <input
                                // type="password" // if not commented, it will autocomplete both input fields
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Password"
                                autoComplete="off"
                                onChange={(e) =>
                                    this.handleChange(e, "password")
                                }
                                value={this.state.password}
                            ></input>
                        </div>

                        <button
                            // check if input fields are empty and returns a boolean:
                            //      if empty, the 'submit' button will be disabled
                            disabled={!this.isValid()}
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                            Submit
                        </button>
                    </form>
                </MDBContainer>
            </main>
        );
    }
}

export default LogIn;
