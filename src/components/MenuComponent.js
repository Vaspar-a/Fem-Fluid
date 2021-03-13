import React, { Component } from "react";
import { Media } from "reactstrap";
import Loading from "./Loading";

class MenuComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const menu = this.props.dishes.dishes.map((dish, index) => {
      return (
        <div key={dish.id} className="col-12 mt-5">
          <Media tag="li">
            <Media left middle>
              <Media object src={dish.image} alt={dish.name} />
            </Media>
            <Media body className="ml-5">
              <Media heading>{dish.name}</Media>
              <p>{dish.description}</p>
            </Media>
          </Media>
        </div>
      );
    });

    if (this.props.dishes.isLoading) {
      return <Loading />;
    } else if (this.props.dishes.errMess) {
      return <h4>{this.props.dishes.errMess}</h4>;
    } else {
      return (
        <div>
          <div className="container">
            <div className="row">
              <Media list>{menu}</Media>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default MenuComponent;
