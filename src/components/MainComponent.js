import React, { Component } from "react";
import Menu from "./CardComponent";
import DishDetails from "./DishDetailComponent";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Product from "../pages/Product"
import { Switch, Route, Redirect} from "react-router-dom";
import {
  TransitionGroup,
  CSSTransition,
} from "react-transition-group";

const Main = () => {
    return (
      <>
        <Header />
        <TransitionGroup>
          <CSSTransition
            classNames="page"
            timeout={300}
          >
            <Switch>
              {/* <Route path="/home" component={HomePage} /> */}
              {/* <Route
                exact
                path="/products"
                component={() => <Menu dishes={this.props.dishes} />}
              /> */}
              <Route
                exact
                path="/contactus"
                component={() => (
                  <Contact />
                )}
              />
              <Route
                exact
                path="/aboutus"
                component={() => <About />}
              />
              <Route
                exact
                path="/product"
                component={() => <Product />}
              />
              <Redirect to="/contactus" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </>
    );
}

export default Main;
