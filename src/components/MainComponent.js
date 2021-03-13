import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import { Switch, Route, Redirect} from "react-router-dom";
import {
  TransitionGroup,
  CSSTransition,
} from "react-transition-group";

const menus = [
  {text: 'Home', icon: 'fa fas-home', link: 'home'},
  {text: 'Products', icon: 'fa fas-list', link: 'products'},
  {text: 'About Us', icon: 'fa fas-info', link: 'about'},
  {text: 'Contact', icon: 'fa fas-address-card', link: 'contact'},
]

const Main = () => {
    return (
      <>
        <Header menus={menus} />
        <TransitionGroup>
          <CSSTransition
            classNames="page"
            timeout={300}
          >
            <Switch>
              <Route path="/home" component={Home} />
              {/* <Route
                exact
                path="/products"
                component={() => <Menu dishes={this.props.dishes} />}
              /> */}
              <Route
                exact
                path="/contact"
                component={() => (
                  <Contact />
                )}
              />
              <Route
                exact
                path="/about"
                component={() => <About />}
              />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </>
    );
}

export default Main;
