import React from "react";
import { Label, Col, Button, Row } from "reactstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input/Input";

const menus = [
  { text: "Home", icon: "fa fas-home", link: "home" },
  { text: "Products", icon: "fa fas-list", link: "products" },
  { text: "About Us", icon: "fa fas-info", link: "about" },
  { text: "Contact", icon: "fa fas-address-card", link: "contact" },
];

const Contact = () => {
  return (
    <>
      <Header menus={menus} />
      <main className="container">
        <div className="row">
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <section className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              139, CHARUSAT Campus
              <br />
              Highway Off, Nadiad, Petlad Rd
              <br />
              Changa, Gujarat - 388421
              <br />
              <i className="fa fa-phone"></i>{" "}02697-265021
              <br />
              <i className="fa fa-fax"></i>{" "}02697-265011
              <br />
              <i className="fa fa-envelope"></i>{" "}
              <a href="mailto:info@charusat.ac.in">info@charusat.ac.in</a>
            </address>
          </section>
          <section className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </section>
          <div className="col-12 col-sm-11 offset-sm-1 mb-3">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:02697-265011"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:info@charusat.ac.in"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content mt-2">
          <div className="col-12">
            <div className="col-12 mb-3">
              <h3>Send us your Feedback</h3>
            </div>
            <div className="col-12 col-md-9">
              <form>
              <Row className="form-group">
                <Label htmlFor="firstname" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input className="form-control" pattern="[a-zA-Z]{3,}" error="Please enter valid first name" />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="lastname" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Input className="form-control" pattern="[a-zA-Z]{3,}" error="Please enter valid last name" />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="telnum" md={2}>
                  Contact Tel.
                </Label>
                <Col md={10}>
                  <Input
                    type="tel"
                    className="form-control"
                    error="Please enter valid contact number"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    type="email"
                    className="form-control"
                    error="Please enter valid email"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 6, offset: 2 }}>
                  <div className="form-check">
                    <Label check>
                      <input type="checkbox" className="form-check-input" />
                      <strong> May we contact you?</strong>
                    </Label>
                  </div>
                </Col>
                <Col md={{ size: 3, offset: 1 }}></Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="message" md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  <textarea className="textarea"></textarea>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </Row>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
