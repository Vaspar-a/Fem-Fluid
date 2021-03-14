import React from "react";
import Home from "./pages/Home/Home";
import Product from "./pages/Products/Products";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import { Switch, Route, Redirect, BrowserRouter} from "react-router-dom";

const Routes = () => {
    return (
      <BrowserRouter>
                  <Switch>
              <Route path="/home" component={Home} />
              <Route
                exact
                path="/products"
                component={() => <Product />}
              />
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
      </BrowserRouter>
    );
}

export default Routes;
