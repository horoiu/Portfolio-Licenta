import React, { useState, useEffect } from "react";
import "./portfolio.css";

import { Link } from "react-router-dom";
import { Card, Row } from "react-bootstrap";

function Portfolio() {
    // useEfect() is used to run the fechItems function once the Portfolio component is mounted
    useEffect(() => {
        fetchItems();
    }, []);

    // initialising state with an empty array
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch("http://localhost:4000/projects");
        const items = await data.json();

        console.log("Portfolio.js: items.data=", items.data);
        setItems(items.data);
    };

    return (
        <main className="mt-5 ml-3 mr-2">
            <Row className="portfolio mt-5 mb-5">
                {items.map((item, index) => (
                    <Card
                        key={index}
                        className="card m-4 col-xl-2 col-lg-3 col-md-3 col-sm-4 hoverable"
                        style={{ width: "18rem" }}
                    >
                        <Card.Img
                            variant="top"
                            className="card-img"
                            // src={`https://devspace.ro/Portfolio/Portfolio/images/projects/${item.fisier_imagine}`}
                            src={`/projects-img/${item.fisier_imagine}`}
                        />
                        <Card.Body>
                            <Card.Title>{item.nume_proiect}</Card.Title>
                            <Card.Text>{item.nume_categorie}</Card.Text>
                            <Link
                                to={`/portfolio/project=${item.id_proiect}`}
                                className="btn btn-info btn-lg"
                            >
                                More details
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </main>
    );
}

export default Portfolio;
