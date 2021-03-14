import React from "react";
import {
  UncontrolledCollapse,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardGroup,
  CardImg,
  CardTitle,
  CardText,
  CardBody,
  CardHeader,
} from "reactstrap";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FadeTransform } from "react-animation-components";
import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider";

const Product = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Product</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Product</h3>
            <hr />
          </div>
          <div>
            <CardGroup>
              <Card>
                <CardBody>
                  <CardTitle>MR fluid</CardTitle>
                  <CardText>
                    Magnetorheological fluids is commonly known as MR Fluids. MR
                    fluids are basically a mixture of mineral oil or synthetic
                    oil and Pure Iron Powder.MR fluids consists of around 30 %
                    by volume of Pure Iron particles. Size of this Iron
                    particles is around 10 microns. Viscosity of these fluids
                    change drastically under inflence of magnetic field. The
                    Yield stress of the fluid in active state can be controlled
                    very accurately by varying magnetic filed. This fluid finds
                    application in dampers, clutches, shock absorbers etc.
                  </CardText>
                  <Button
                    color="primary"
                    id="MR_fluid"
                    style={{ marginBottom: "1rem" }}
                  >
                    Read More
                  </Button>
                  <UncontrolledCollapse toggler="#MR_fluid">
                    <Card>
                      <CardBody>
                        <Table striped bordered hover variant="dark">
                          <thead>
                            <tr>
                              <th colSpan="2"><center>Properties of MR Fluid</center></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td rowSpan="2">Properties</td>
                              <td>Values</td>
                            </tr>
                            <tr>
                              <td>MRF</td>
                            </tr>
                            <tr>
                              <td>Density (g/cm3)</td>
                              <td>2.2</td>
                            </tr>
                            <tr>
                              <td>Yield Stress (kPa) @174. 3 kA/m</td>
                              <td>21±01</td>
                            </tr>
                            <tr>
                              <td>Plastic Viscosity (mPa. s) @ 40oC</td>
                              <td>98±01</td>
                            </tr>
                            <tr>
                              <td>Weight Fraction (%)</td>
                              <td>73</td>
                            </tr>
                            <tr>
                              <td>
                                Magnetic Permeability, Relative @low Field
                              </td>
                              <td>4</td>
                            </tr>
                            <tr>
                              <td>Response Time (s)</td>
                              <td>0.001</td>
                            </tr>
                            <tr>
                              <td>Flash point (oC)</td>
                              <td>˃150</td>
                            </tr>
                          </tbody>
                        </Table>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <CardTitle>MR Damper</CardTitle>
                  <CardText>
                    Using inherent properties of phase change process of MR
                    fluid, MR damper is one of the most common application of MR
                    fluid. In this types of damper, damping force can be tuned
                    by applying external current to induced the magnetic field
                    to activate the fluid.
                  </CardText>
                  <Button
                    color="primary"
                    id="MR_Damper"
                    style={{ marginBottom: "1rem" }}
                  >
                    Read More
                  </Button>
                  <UncontrolledCollapse toggler="#MR_Damper">
                    <Card>
                      <CardTitle>Application of MR damper</CardTitle>
                      <CardBody>
                        <ul>
                          <li>Front load Washing machine (Shear mode)</li>
                          <li>Recoil system (flow Mode)</li>
                          <li>Driver seat Suspension System (Flow mode)</li>
                          <li>Military vehicle Suspension system (Flow mode)</li>
                          <li>Suspension system of Four wheeler (Flow mode)</li>
                          <li>Seismic Vibration absorber (Flow mode)</li>
                          <li>Railway vibration absorber (Flow mode)</li>
                        </ul>
                      </CardBody>
                    </Card>
                  </UncontrolledCollapse>
                </CardBody>
              </Card>
            </CardGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
