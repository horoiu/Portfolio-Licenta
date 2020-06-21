import React, { useState, useEffect } from "react";
import "./portfolio.css";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

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
        <div className="portfolio">
            <main className="row mt-4 mb-4 ml-5">
                {items.map((item, index) => (
                    <Card
                        key={index}
                        className="card m-4 ml-5 col-md-3"
                        style={{ width: "18rem" }}
                    >
                        <Card.Img
                            variant="top"
                            src={`https://devspace.ro/Portfolio/Portfolio/images/projects/${item.fisier_imagine}`}
                        />
                        <Card.Body>
                            <Card.Title>{item.nume_proiect}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card
                                title & content.
                            </Card.Text>
                            <Button
                                key={item.id_proiect}
                                variant="secondary"
                                size="lg"
                            >
                                <Link
                                    to={`/portfolio/project=${item.id_proiect}`}
                                    data={item[index]}
                                >
                                    More details
                                </Link>
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </main>
        </div>
    );
}

export default Portfolio;

////////////////////

// import React, { useState, useEffect } from "react";
// import "./portfolio.css";
// import { Link } from "react-router-dom";

// function Portfolio() {
// useEfect() is used to run the fechItems function once the Portfolio component is mounted
// useEffect(() => {
//     fetchItems();
// }, []);

// initialising state with an empty array
// const [items, setItems] = useState([]);

// const fetchItems = async () => {
//     const data = await fetch("http://localhost:4000/proiecte");
//     const items = await data.json();

// console.log("Portfolio.js: items.data=", items.data);
//         setItems(items.data);
//     };

//     return (
//         <main className="portfolio">
//             {items.map((item, index) => (
//                 <h3 key={item.id_proiect}>
//                     <Link
//                         to={`/portfolio/project=${item.id_proiect}`}
//                         data={item[index]}
//                     >
//                         {item.nume_proiect}
//                     </Link>
//                 </h3>
//             ))}
//         </main>
//     );
// }

// export default Portfolio;
