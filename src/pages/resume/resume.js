import React, { Component } from "react";
import "./resume.css";

// import "react-pdf/dist/Page/AnnotationLayer.css";
import { Document, Page } from "react-pdf/dist/entry.webpack";

class Resume extends Component {
    state = { numPages: null, pageNumber: 1 };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    goToPrevPage = () =>
        this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
    goToNextPage = () =>
        this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <main className="resume mt-5">
                <nav>
                    <button onClick={this.goToPrevPage}>Prev</button>
                    <button onClick={this.goToNextPage}>Next</button>
                </nav>

                <div className="text-center row d-flex justify-content-center fluid mb-3">
                    <Document
                        file="CV-2019.pdf"
                        className="resume-file mt-2"
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} width={600} />
                    </Document>
                </div>

                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </main>
        );
    }
}

export default Resume;
