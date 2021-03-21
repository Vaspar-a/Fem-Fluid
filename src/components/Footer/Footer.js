import React, { Component } from "react";
import {NavLink} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
        <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-4 col-sm-2 offset-1">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><NavLink to="home" className="footer-link-color">Home</NavLink></li>
                        <li><NavLink to="about" className="footer-link-color">About</NavLink></li>
                        <li><NavLink to="products" className="footer-link-color">Products</NavLink></li>
                        <li><NavLink to="contact" className="footer-link-color">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address className="address">
                    139, CHARUSAT Campus<br />
                    Highway Off, Nadiad, Petlad Rd<br />
                    Changa, Gujarat - 388421<br />
                        <i className="fa fa-phone fa-lg"></i> 02697-265021<br />
                        <i className="fa fa-fax fa-lg"></i> 02697-265011<br />
                        <i className="fa fa-envelope fa-lg"></i> <a href="mailto:info@charusat.ac.in">info@charusat.ac.in</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4  align-self-center">
                    <div className="text-center pt-2 pt-sm-0">
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><span
                                className="fa fa-facebook fa-lg"></span></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><span
                                className="fa fa-linkedin fa-lg"></span></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><span
                                className="fa fa-twitter fa-lg"></span></a>
                        <a className="btn btn-social-icon btn-youtube" href="http://youtube.com/"><span
                                className="fa fa-youtube fa-lg"></span></a>
                        <a className="btn btn-social-icon" href="mailto:info@charusat.ac.in"><span className="fa fa-envelope fa-lg"></span></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <p className="copyright">© Copyright 2022 Fem Fluid</p>
                </div>
            </div>
        </div>
    </footer>
    );
  }
}

export default Footer;
