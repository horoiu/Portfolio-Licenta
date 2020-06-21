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

        // console.log("Portfolio.js: items.data=", items.data);
        setItems(items.data);
    };

    return (
        <main className="container portfolio row mt-5 mb-5 ml-5">
            {items.map((item, index) => (
                <Card
                    key={index}
                    className="m-4 col-md-3"
                    style={{ width: "18rem" }}
                >
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
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
                                {item.nume_proiect}
                            </Link>
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </main>
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
