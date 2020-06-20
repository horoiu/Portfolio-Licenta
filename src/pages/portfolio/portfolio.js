import React, { useState, useEffect } from "react";
import "./portfolio.css";

function Portfolio() {
    // useEfect() is used to run the fechItems function once the Portfolio component is mounted
    useEffect(() => {
        fetchItems();
    }, []);

    // initialising state with an empty array
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        // const data = await fetch("localhost:4000/proiecte");
        const data = await fetch("http://localhost:4000/proiecte");

        const items = await data.json();
        console.log(items.data);
        setItems(items.data);
    };

    return (
        <main className="portfolio">
            {items.map((item, index) => (
                <h3 key={index}>{item.nume_proiect}</h3>
            ))}
        </main>
    );
}

export default Portfolio;
