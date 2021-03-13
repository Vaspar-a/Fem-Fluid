import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Label,
} from "reactstrap";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { LocalForm, Control, Errors } from "react-redux-form";
import { FadeTransform, Stagger, Fade } from "react-animation-components";

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.minLength = this.minLength.bind(this);
    this.maxLength = this.maxLength.bind(this);

    this.state = {
      isModalOpen: false,
    };
  }

  maxLength = (len) => (val) => !val || val.length <= len;
  minLength = (len) => (val) => val && val.length > len;

  handleOnClick(events) {
    events.preventDefault();
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleOnSubmit(values) {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
    this.props.postComment(
      this.props.dishId,
      values.ratings,
      values.name,
      values.comment
    );
  }

  render() {
    return (
      <div>
        <Button color="secondary" outline={true} onClick={this.handleOnClick}>
          <i className="fa fa-pencil" /> Submit Comment
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.handleOnClick}>
          <ModalHeader toggle={this.handleOnClick}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleOnSubmit(values)}>
              <Row className="form-group">
                <Col md={12}>
                  <Label htmlFor="rating">Rating</Label>
                </Col>
                <Col md={12}>
                  <Control.select
                    model=".ratings"
                    name="ratings"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={12}>
                  <Label htmlFor="name">Your Name</Label>
                </Col>
                <Col md={12}>
                  <Control.text
                    model=".name"
                    name="name"
                    className="form-control"
                    validators={{
                      minLength: this.minLength(2),
                      maxLength: this.maxLength(15),
                    }}
                  />
                  <Errors
                    show="touched"
                    model=".name"
                    className="text-danger"
                    messages={{
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={12}>
                  <Label htmlFor="comment">Comment</Label>
                </Col>
                <Col md={12}>
                  <Control.textarea
                    model=".comment"
                    name="comment"
                    className="form-control"
                    rows={6}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={12}>
                  <Button color="primary">Submit</Button>
                </Col>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const RenderDish = ({ dish }) => {
  if (dish !== null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <FadeTransform
          in
          transformProps={{
            exitTransform: "scale(0.5) translateY(-50%)",
          }}
        >
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </FadeTransform>
      </div>
    );
  } else return <div></div>;
};

const RenderComments = ({ comments, postComment, dishId }) => {
  if (comments !== null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          <Stagger in>
            {comments.map((comment, index) => {
              return (
                <Fade in>
                  <li>{comment.comment}</li>
                  <li>{`--${comment.author}, ${new Intl.DateTimeFormat(
                    "en-US",
                    {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }
                  ).format(new Date(Date.parse(comment.date)))}`}</li>
                </Fade>
              );
            })}
          </Stagger>
          ;
        </ul>
        <CommentForm dishId={dishId} postComment={postComment} />
      </div>
    );
  } else return <div></div>;
};

const DishDetails = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish !== null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments
            comments={props.comments}
            postComment={props.postComment}
            dishId={props.dish.id}
          />
        </div>
      </div>
    );
  } else return <div />;
};

export default DishDetails; //DishDetailComponent
