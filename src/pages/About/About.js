import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";

const About = () => {
  return (
      <>
    <div className="container about-container">
      <div className="row">
        <div className="col-12">
          <h3>About Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <h2>Our History</h2>
          <p>
            Started in 2002, Fem Fluid quickly established itself as a
            engineering corporation par excellence in India. With its unique
            brand of engineering solutions that can be found nowhere else, it
            enjoys patronage from the A-list clientele in India. Providing the
            best engineering solutions in the world, since 2002.
          </p>
          <p>
            The corporation traces its humble beginnings to{" "}
            <em>MR Dampers</em>, a successful tool invented by our CEO, Mr.
            Shankar Venkatraman, that featured for the first time in the world's best
            engineering tools.
          </p>
        </div>
        <div className="col-12 col-md-5">
          <Card>
            <CardHeader className="bg-primary text-white">
              Facts At a Glance
            </CardHeader>
            <CardBody>
              <dl className="row p-1">
                <dt className="col-6">Started</dt>
                <dd className="col-6">1 April 2002</dd>
                <dt className="col-6">Major Stake Holder</dt>
                <dd className="col-6">Fem Fluid Inc.</dd>
                <dt className="col-6">Last Year's Turnover</dt>
                <dd className="col-6">$250,375</dd>
                <dt className="col-6">Employees</dt>
                <dd className="col-6">20</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col-12">
          <Card>
            <CardBody className="bg-faded">
              <blockquote className="blockquote">
                <p className="mb-0">
                  At its heart engineering is about using science to find
                  creative practical solutions. It’s a noble profession.
                </p>
                <footer className="blockquote-footer">
                  Queen Elizabeth II,{" "}
                  <cite title="Source Title">
                    A speech by The Queen at The Queen Elizabeth prize for
                    Engineering, 2013
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
