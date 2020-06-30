import React, { Component } from "react";
import "./logIn.css";

import * as Cookies from "../../services/cookies";
import { MDBContainer } from "mdbreact";

class LogIn extends Component {
    constructor(props) {
        super(props);
        // inintializing empty state for 'user', 'password' and 'errMessage'
        this.state = {
            user: "",
            password: "",
            errMessage: "",
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
        // console.log("Log-In, handleSubmit() this.state:", this.state);
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
                    // console.log("No response from 'login fetch'.");
                    // console.log("No matches. REJECTED");
                    // show error message
                    this.logInReject();
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
                        // console.log("Name and password matches. LOGED-IN");
                        // go set cookie for LOGED-IN
                        Cookies.setCookie("portfolio-app", "loged-in", 1);

                        // redirect to HomePage after sucessfuly Log-in
                        window.location.replace("/");
                    } else {
                        // console.log("No matches. REJECTED");
                        // show error message
                        this.logInReject();
                    }
                }
            })
            .catch((err) => console.log("Error from 'login fetch':", err));
    };

    // check if input fields are empty and returns a boolean:
    //      if empty, the 'submit' button will be disabled
    isValid() {
        if (this.state.user === "" || this.state.password === "") {
            return false;
        }
        return true;
    }

    logInReject() {
        this.setState({ user: "" });
        this.setState({ password: "" });
        this.setState({
            errMessage: "Incorrect username or password !!! ",
        });
    }

    render() {
        return (
            <main className="log-in container-fluid mt-5" id="log-in">
                <MDBContainer>
                    <h2 className="h2-responsive mt-5">Log In</h2>
                    <form
                        className="col-xl-4 col-lg-5 col-md-6 col-sm-8 mt-4 mb-4 py-5 hoverable"
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
                            Log-In
                        </button>
                        <h6 className="h6-responsive text-danger font-weight-bold">
                            {this.state.errMessage}
                        </h6>
                    </form>
                </MDBContainer>
            </main>
        );
    }
}

export default LogIn;
