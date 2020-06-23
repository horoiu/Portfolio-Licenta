import React, { Component } from "react";
import "./contact.css";

class Contact extends Component {
    render() {
        return (
            <main className="contact">
                <div className="bg-info contact4 overflow-hiddedn position-relative">
                    <div className="row no-gutters">
                        <div className="container">
                            <div className="col-lg-6 contact-box mb-4 mb-md-0">
                                <div className="">
                                    <h1 className="title font-weight-light text-white mt-2">
                                        Contact Us
                                    </h1>
                                    <form className="mt-3">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <input
                                                        className="form-control text-white"
                                                        type="text"
                                                        placeholder="name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <input
                                                        className="form-control text-white"
                                                        type="email"
                                                        placeholder="email address"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <textarea
                                                        className="form-control text-white"
                                                        rows="3"
                                                        placeholder="message"
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 d-flex align-items-center mt-2">
                                                <button
                                                    type="submit"
                                                    className="btn bg-white text-inverse px-3 py-2"
                                                >
                                                    <span> Submit</span>
                                                </button>
                                                <span className="ml-auto text-white align-self-center">
                                                    <i className="icon-phone mr-2"></i>
                                                    +40 740 123456
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 right-image p-r-0">
                            <div className="mapouter">
                                <div className="gmap_canvas mt-4">
                                    <iframe
                                        title="geolocation"
                                        className="mt-5"
                                        width="700"
                                        height="430"
                                        id="gmap_canvas"
                                        src="https://maps.google.com/maps?q=Marasti%20Cluj-napoca&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        frameborder="0"
                                        scrolling="no"
                                        marginheight="0"
                                        marginwidth="0"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters">Footer</div>
                </div>
                {/* </div> */}
            </main>
        );
    }
}

export default Contact;
