import React, { Component, useState } from "react";
import "./logIn.css";

import { MDBContainer } from "mdbreact";

class LogIn extends Component {
    constructor(props) {
        super(props);

        // inintializind empty state for 'user' and 'pass'
        this.state = {
            user: "",
            pass: "",
        };
    }

    // updates the state value depending on which input field got modified
    handleInputChange = (e) => {
        // console.log(e.target);
        if (e.target.id === "user") {
            this.setState({ user: e.target.value });
        } else {
            this.setState({ pass: e.target.value });
        }
    };

    // the logic to be implemented after the form is filled and submit button was pressed
    handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `The username you entered is: ${this.state.user} and the password is: ${this.state.pass}`
        );
    };

    // check if input fields are empty and returns a boolean:
    //      if empty, the 'submit' button will be disabled
    isValid() {
        if (this.state.user === "" && this.state.pass === "") {
            return false;
        }
        return true;
    }

    render() {
        return (
            <main className="log-in container-fluid mt-5">
                <MDBContainer>
                    <h3>Log In</h3>
                    <form
                        className="col-xl-6 col-md-6 col-sm-6 mt-3 mb-5 py-4 hoverable"
                        id="logIn-form"
                        onSubmit={this.handleSubmit}
                    >
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="user"
                                name="user"
                                onChange={this.handleInputChange}
                                value={this.state.user}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                // type="password"  // if not commented, it will autocomplete both input fields
                                className="form-control"
                                id="password"
                                name="password"
                                autoComplete="off"
                                onChange={this.handleInputChange}
                                value={this.state.pass}
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