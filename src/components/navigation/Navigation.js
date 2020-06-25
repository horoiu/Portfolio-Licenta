import React from "react";
import "./navigation.css";

import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar } from "react-bootstrap";

function Navigation() {
    return (
        <Navbar
            collapseOnSelect
            expand="sm"
            bg="dark"
            variant="dark"
            className="fixed-top mb-5"
        >
            <LinkContainer to="/">
                <Navbar.Brand href="#home">DevSpace</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/portfolio">
                        <Nav.Link>Portfolio</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/resume">
                        <Nav.Link>Resume</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contact">
                        <Nav.Link>Contact</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/login">
                        <Nav.Link>Log-In</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
