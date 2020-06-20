import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/home/home";
import About from "../pages/about/about";
import Portfolio from "../pages/portfolio/portfolio";
import Contact from "../pages/contact/contact";
import Resume from "../pages/resume/resume";
import notFound from "../pages/notFound/notFound";

class Routing extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/contact" component={Contact} />
                    <Route component={notFound} />
                </Switch>
            </div>
        );
    }
}

export default Routing;
