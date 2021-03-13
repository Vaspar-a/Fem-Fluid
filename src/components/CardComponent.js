import React, { Component } from "react";
import {
  Card,
  CardImgOverlay,
  CardImg,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import Loading from "./Loading";

class CardComponent extends Component {
  render() {
    const menu = this.props.dishes.map((dish, index) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card
            onClick={() => {
              this.props.onClick(dish.id);
            }}
          >
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div>
        <div className="container">
          <div className="row">{menu}</div>
        </div>
      </div>
    );
  }
}

function RenderMenuItem({ dish }) {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Menu = (props) => {
  const menu = props.dishes.dishes.map((dish, index) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} />
      </div>
    );
  });

  if (props.dishes.isLoading) {
    return <Loading />;
  } else if (props.dishes.errMess) {
    return <h4>{this.props.dishes.errMess}</h4>;
  } else {
    return (
      <div>
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/home">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Menu</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>Menu</h3>
              <hr />
            </div>
          </div>
          <div className="row">{menu}</div>
        </div>
      </div>
    );
  }
};

export default Menu; //CardComponent
