import React, { useState, useEffect } from "react";
import { MDBSelect } from "mdbreact";

function Select() {
    // useEfect() is used to run the fechItems function once the Portfolio component is mounted
    useEffect(() => {
        fetchItems();
    }, []);

    // initialising state with an empty array
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch("http://localhost:4000/technology");
        const items = await data.json();

        // console.log("Technology.js: items.data=", items.data);
        setItems(items.data);
    };

    return (
        <div className="">
            <select
                className="browser-default custom-select form-control input"
                id="technology"
                name="technology"
            >
                {items.map((item) => (
                    <option key={item.id} value={item.technology}>
                        {item.technology}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
