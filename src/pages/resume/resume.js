import React, { Component } from "react";
import "./resume.css";

// import "react-pdf/dist/Page/AnnotationLayer.css";
import { Document, Page } from "react-pdf/dist/entry.webpack";

class Resume extends Component {
    state = { numPages: null, pageNumber: 1 };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    render() {
        const { pageNumber, numPages } = this.state;
        return (
            <main className="resume mt-5 mb-5">
                <div className="text-center row d-flex justify-content-center fluid mb-3">
                    <Document
                        file="CV-2019.pdf"
                        className="resume-file mt-3 mb-4"
                        onLoadSuccess={this.onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} width={600} />
                    </Document>
                </div>
            </main>
        );
    }
}

export default Resume;
