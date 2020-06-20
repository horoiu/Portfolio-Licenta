import React from "react";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Routing from "./services/routing";
import Footer from "./components/footer/footer";

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Routing />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
