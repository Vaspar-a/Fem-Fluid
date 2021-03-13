import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false }
    
    this["navLinks"] = React.createRef();
    this.refers = {};

    this.openMenu = this.openMenu.bind(this);
    this.handleClickOnLi = this.handleClickOnLi.bind(this);

    this.props.menus.forEach((menu) => {
      this["refers"][menu.text] = React.createRef();
    });

    this.state = {
      pathname: window.location.pathname
    }
  }

  handleClickOnLi(event) {
    event.stopPropagation();
    this.setState({pathname: window.location.pathname});

    this.openMenu(event);
  }

  openMenu(event) {
    this.setState({ clicked: !this.state.clicked})
    event.stopPropagation();
    this["navLinks"].current.classList.toggle("nav-links-active");
    for (const ref in this.refers) {
      if (this.refers.hasOwnProperty(ref)) {
        const element = this["refers"][ref];
        element.current.classList.toggle("li-fade");
      }
    }
  }


  render() {
    let activeElement;
    const liElements = this.props.menus.map((menu, index) => {
        if (window.location.pathname.slice(1) === menu.link || (window.location.pathname === '/' && index === 0)) {
        activeElement = menu.text;
        return (
          <li
            className={"link link-active"}
            ref={this["refers"][menu.text]}
            id={menu.text}
            key={menu.text}
            onClick={this.handleClickOnLi}
          >
            <Link to={menu.link} className="list-style">
              {/* <i className={`menu-img ${menu.icon}`}></i> */}
              <span className={"menu-text"}>{menu.text}</span>
            </Link>
          </li>
        );
      } else {
        return (
          <li
          className={"link"}
            ref={this["refers"][menu.text]}
            id={menu.text}
            key={menu.text}
            onClick={this.handleClickOnLi}
          >
            <Link to={menu.link} className="list-style">
              {/* <i className={`menu-img ${menu.icon}`}></i> */}
              <span className={"menu-text"}>{menu.text}</span>
            </Link>
          </li>
        );
      }
    });
    this.activeMenu = this.refers[activeElement];

    return (
      <>
        <header>
          <nav className={"nav-logo"}>
            <i className={"img"}></i>
            <h3 className="logo-name">Fem Fluid</h3>
          </nav>
          <div id="menu-bar" onClick={this.openMenu}>
            {/* <div className="stick s1"></div>
            <div className="stick s2"></div>
            <div className="stick s3"></div> */}
            <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
          </div>
          <ul className={"nav-links"} ref={this["navLinks"]}>
            {liElements}
          </ul>
        </header>
      </>
    );
  }
}

export default Header;
