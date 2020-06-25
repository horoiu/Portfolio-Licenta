import React, { Component, useState } from "react";
import "./logIn.css";

import { MDBContainer } from "mdbreact";

class LogIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: "",
            pass: "",
        };
    }

    handleInputChange = (e) => {
        // console.log(e.target);
        if (e.target.id === "user") {
            this.setState({ user: e.target.value });
        } else {
            this.setState({ pass: e.target.value });
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `The username you entered is: ${this.state.user} and the password is: ${this.state.pass}`
        );
    };

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
                                // type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                autoComplete="off"
                                onChange={this.handleInputChange}
                                value={this.state.pass}
                            ></input>
                        </div>

                        <button
                            disabled={!this.isValid()}
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                            Submit
                        </button>
                    </form>
                </MDBContainer>
            </main>

            //     <main className="log-in container-fluid mt-5">
            //         <MDBContainer>
            //             <form
            //                 className="col-xl-6 col-md-6 col-sm-6 mt-3 mb-5 py-4 hoverable"
            //                 id="logIn-form"
            //                 // onSubmit={}
            //             >
            //                 <h3>Log In</h3>

            //                 <div className="form-group">
            //                     <label>Username</label>
            //                     <input
            //                         // id="user-input"
            //                         className="form-control"
            //                         value={this.state.user}
            //                         onChange={(e) => {
            //                             console.log(e.target.value);
            //                             this.setState({ value: e.target.user });
            //                         }}
            //                     />
            //                     <br />
            //                     {this.state.user}
            //                 </div>

            //                 {/* <div className="form-group">
            //                     <label>Password</label>
            //                     <input
            //                         id="pass-input"
            //                         type="password"
            //                         className="form-control"
            //                         // value={this.state.pass}
            //                         // onChange={}
            //                     />
            //                 </div> */}
            //                 <button
            //                     // type="submit"
            //                     className="btn btn-primary btn-block"
            //                     // disabled={}
            //                 >
            //                     Submit
            //                 </button>
            //             </form>
            //         </MDBContainer>
            //     </main>
        );
    }
}

export default LogIn;

// import React, { Component } from "react";
// import { render } from "react-dom";
// // import Hello from "./Hello";
// // import "./style.css";
// import React, { useState } from "react";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import "./Login.css";

// export default function Login(props) {
//     const [username, setUserName] = useState("");
//     const [password, setPassword] = useState("");

//     function validateFormFields() {
//         return username.length > 0 && password.length > 0;
//     }
//     function handleSubmit(event) {
//         event.preventDefault();
//     }
//     return (
//         <div className="Login">
//             <h1> Welcome to Edubca </h1>
//             <form onSubmit={handleSubmit}>
//                 <FormGroup controlId="Username" bsSize="large">
//                     <ControlLabel>username </ControlLabel>
//                     <FormControl
//                         autoFocus
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUserName(e.target.value)}
//                     />
//                 </FormGroup>
//                 <FormGroup controlId="password" bsSize="large">
//                     <ControlLabel>Password</ControlLabel>
//                     <FormControl
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         type="password"
//                     />
//                 </FormGroup>
//                 <Button
//                     block
//                     bsSize="large"
//                     disabled={!validateFormFields()}
//                     type="submit"
//                 >
//                     Login
//                 </Button>
//             </form>
//         </div>
//     );
// }
// render(<Login />, document.getElementById("root"));
