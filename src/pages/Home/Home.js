import React, { Component } from "react";
import "./Home.css";

import slide1 from "../../assets/images/Flow mode.jpg";
import slide2 from "../../assets/images/shear mode.jpg";
import slide3 from "../../assets/images/IMG_20171106_105106.jpg";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const menus = [
  { text: "Home", icon: "fa fas-home", link: "home" },
  { text: "Products", icon: "fa fas-list", link: "products" },
  { text: "About Us", icon: "fa fas-info", link: "about" },
  { text: "Contact", icon: "fa fas-address-card", link: "contact" },
];

export default class Home extends Component {
  render() {
    return (
      <>
        <Header menus={menus} />
        <section>
          <div className="slider">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
              data-interval="3000"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                  ></img>
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                  ></img>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="arrow left"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="arrow right"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
            <h1 className="title">About us</h1>
            <div className="content">
              <h4>Next Generation Smart Materials</h4>
              <p className="text">
                &#8921; Fem Fluid is a diversifed company dedicated to
                development and application of new generaton of product.
              </p>
              <p className="text">
                &#8921; Our knowlwdge stems from our core group who specialize
                in design, synthesis and mechanier. With basic knowlwdge our
                company has established a strong lab quuipped for performance as
                weel as application driven instrument that simulate real world
                conditions.
              </p>
              <p className="text">
                &#8921; To know more about us..click below button or go to about
                section
              </p>
              {/* <Navlink></Navlink> */}
              <NavLink to="about" className="link-to">
                <button className="btn btn-outline-primary">About</button>
              </NavLink>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
