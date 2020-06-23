import React, { useState, useEffect } from "react";
import "./portfolio.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function Portfolio() {
    // useEfect() is used to run the fechItems function once the Portfolio component is mounted
    useEffect(() => {
        fetchItems();
    }, []);

    // initialising state with an empty array
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch("http://localhost:4000/proiecte");
        const items = await data.json();

        console.log("Portfolio.js: items.data=", items.data);
        setItems(items.data);
    };

    return (
        <main className=" portfolio row mt-4 mb-5 ml-5">
            {items.map((item, index) => (
                <Card
                    key={index}
                    className="card m-4 ml-5 mt-4 col-md-3 hoverable"
                    style={{ width: "18rem" }}
                >
                    <Card.Img
                        variant="top"
                        src={`https://devspace.ro/Portfolio/Portfolio/images/projects/${item.fisier_imagine}`}
                    />
                    <Card.Body>
                        <Card.Title>{item.nume_proiect}</Card.Title>
                        <Card.Text>{item.nume_categorie}</Card.Text>
                        <Link
                            to={`/portfolio/project=${item.id_proiect}`}
                            data={item[index]}
                            className="btn btn-info btn-lg"
                        >
                            More details
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </main>
    );
}

export default Portfolio;
