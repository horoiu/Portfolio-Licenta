import React from "react";
import "./App.css";
import "./components/navigation/Navigation";
import Navigation from "./components/navigation/Navigation";
import About from "./pages/about/about";
import Portfolio from "./pages/portfolio/portfolio";
import Contact from "./pages/contact/contact";

function App() {
    return (
        <div className="App">
            <Navigation />
            <About />
            <Portfolio />
            <Contact />
        </div>
    );
}

export default App;
