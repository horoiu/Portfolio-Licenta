import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/home/home";
import About from "../pages/about/about";
import Portfolio from "../pages/portfolio/portfolio";
import Contact from "../pages/contact/contact";
import Resume from "../pages/resume/resume";
import notFound from "../pages/notFound/notFound";
import Project from "../pages/project/project";
import LogIn from "../pages/logIn/logIn";
import LogOut from "../pages/logOut/logOut";
import AddProject from "../pages/addProject/addProject";

class Routing extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/portfolio" exact component={Portfolio} />
                    <Route
                        path="/portfolio/project=:id_proiect"
                        component={Project}
                    />
                    <Route path="/resume" exact component={Resume} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/logIn" exact component={LogIn} />
                    <Route path="/logOut" exact component={LogOut} />
                    <Route path="/addProject" exact component={AddProject} />
                    <Route component={notFound} />
                </Switch>
            </div>
        );
    }
}

export default Routing;
