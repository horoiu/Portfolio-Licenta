import React, { Component } from "react";
import "./contact.css";

import mediaList from "../../json/mediaIcons.json";
import { Row } from "react-bootstrap";
import { MDBIcon } from "mdbreact";

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: mediaList,
            username: "",
            email: "",
            message: "",
        };
    }

    // updates the state value depending on which input field
    // got modified by sending the 'attribute'
    handleChange = (e, attr) => {
        const newState = { ...this.state };
        newState[attr] = e.target.value;
        this.setState(newState);
    };

    isValid() {
        if (
            this.state.username === "" ||
            this.state.email === "" ||
            this.state.message === ""
        ) {
            return false;
        }
        return true;
    }

    render() {
        let mediaList = this.state.list.map(function (item) {
            return (
                <li key={item.name} className="">
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MDBIcon
                            fab
                            icon={item.icon}
                            size="4x"
                            className="hoverable"
                        />
                    </a>
                </li>
            );
        });

        return (
            <main className="contact mt-5" id="contact">
                <div className="bg-info contact4 overflow-hiddedn position-relative">
                    <div className="row no-gutters">
                        <div className="container">
                            <div className="col-lg-6 contact-box mb-4 mb-md-0">
                                <div className="">
                                    <h2 className="title h2-responsive font-weight-light text-white mt-2">
                                        Contact Us
                                    </h2>
                                    <form className="mt-5">
                                        <Row>
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <input
                                                        type="text"
                                                        className="form-control text-white"
                                                        id="username"
                                                        name="username"
                                                        placeholder="Name"
                                                        onChange={(e) =>
                                                            this.handleChange(
                                                                e,
                                                                "username"
                                                            )
                                                        }
                                                        value={
                                                            this.state.username
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <input
                                                        type="email"
                                                        className="form-control text-white"
                                                        id="email"
                                                        name="email"
                                                        placeholder="Email address"
                                                        onChange={(e) =>
                                                            this.handleChange(
                                                                e,
                                                                "email"
                                                            )
                                                        }
                                                        value={this.state.email}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <textarea
                                                        className="form-control text-white"
                                                        id="message"
                                                        name="message"
                                                        placeholder="Message"
                                                        rows="3"
                                                        onChange={(e) =>
                                                            this.handleChange(
                                                                e,
                                                                "message"
                                                            )
                                                        }
                                                        value={
                                                            this.state.message
                                                        }
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 d-flex align-items-center mt-2">
                                                <button
                                                    disabled={!this.isValid()}
                                                    type="submit"
                                                    className="btn btn-success px-3 py-2"
                                                >
                                                    <span> Submit</span>
                                                </button>
                                                <span className="ml-auto text-white align-self-center">
                                                    <i className="icon-phone mr-2"></i>
                                                    +40 740 123456
                                                </span>
                                            </div>
                                        </Row>
                                    </form>
                                </div>
                                <Row className="">
                                    <ul className="mediaIcons d-flex justify-content-around mt-5 pr-4">
                                        {mediaList}
                                    </ul>
                                </Row>
                            </div>
                        </div>
                        <div className="container">
                            <div className="col-lg-6 right-image p-r-0">
                                <div className="mapouter">
                                    <div className="gmap_canvas mt-5">
                                        <iframe
                                            title="geolocation"
                                            className="iframe-map mt-5 mb-5"
                                            width="700"
                                            height="430"
                                            id="gmap_canvas"
                                            src="https://maps.google.com/maps?q=Marasti%20Cluj-napoca&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                            frameBorder="0"
                                            scrolling="no"
                                            marginHeight="0"
                                            marginWidth="0"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Contact;
