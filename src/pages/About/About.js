import React from "react";
import instrument1 from "../../assets/images/20151225_160518.jpg";
import instrument2 from "../../assets/images/Picture1.jpg";
import result1 from "../../assets/images/Result.jpg";
import result2 from "../../assets/images/Test result 2.png";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const menus = [
  {text: 'Home', icon: 'fa fas-home', link: 'home'},
  {text: 'Products', icon: 'fa fas-list', link: 'products'},
  {text: 'About Us', icon: 'fa fas-info', link: 'about'},
  {text: 'Contact', icon: 'fa fas-address-card', link: 'contact'},
]

const About = () => {
  return (
    <>
<Header menus={menus} />
      <main className="container about-container">
        <div className="row">
          <div className="col-12">
            <h3>About Us</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <section className="col-12">
            <h2>Next Generation Smart Materials</h2>
            <p>
              Fem Fluid is a diversifed company dedicated to development and
              application of new generaton of products.
            </p>

            <p>
              Our knowlwdge stems from our core group who specialize in design,
              synthesis and mechanier. With basic knowlwdge our company has
              established a strong lab quuipped for performance as weel as
              application driven instrument that simulate real world conditions.
            </p>

            <p>
              As a company Fem Fluid is dedicated and drawn by a core to belief
              to convert basic sciences into useful technologies and products.
            </p>
          </section>
          <section className="col-12">
            <h2>Our Infrastructure</h2>
            <p>
              Fem Fluid has coe team who are strong in basic chemistry, nano
              synthesis and mechanical engineering. To complement that Fem Fluid
              has some useful and widely used lab equipment for development and
              routine testing of MR Fluids.
            </p>

            <p>
              Our knowlwdge stems from our core group who specialize in design,
              synthesis and mechanier. With basic knowlwdge our company has
              established a strong lab quuipped for performance as weel as
              application driven instrument that simulate real world conditions.
            </p>

            <p>
              As a company Fem Fluid is dedicated and drawn by a core to belief
              to convert basic sciences into useful technologies and products.
            </p>
          </section>
          <section className="col-12">
            <h2>Lab Instruments</h2>
            <ul className="list-group">
              <li className="list-group-item">Magneto Rheometer</li>
              <li className="list-group-item">
                Vibating Sampling Magnetometer
              </li>
              <li className="list-group-item">XRD Analysis</li>
              <li className="list-group-item">Damper Rig</li>
              <li className="list-group-item">MR Brake Rig</li>
              <li className="list-group-item">Four ball and Weld Load</li>
            </ul>
          </section>
        </div>
        <section className="row row-content mt-3">
          <div className="col-12 col-md-6">
            <img width={"100%"} src={instrument1} alt={"Instrument 1"} />
          </div>
          <div className="col-12 col-md-6">
            <img width={"100%"} src={instrument2} alt={"Instrument 2"} />
          </div>
        </section>
        <section className="row row-content mt-3">
          <div className="col-12 col-md-6">
            <img width={"100%"} src={result1} alt={"Result 1"} />
          </div>
          <div className="col-12 col-md-6">
            <img width={"100%"} src={result2} alt={"Result 1"} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
