import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "../Dropdown/Dropdown";
import Button from "../Button/Button";
import brendalogo from "../../images/brendalogo.svg";

export class Navbar extends Component {
  state = {
    click: false,
    dropdown: false,
  };

  handleClick = () => {
    this.setState({ click: !this.state.click });
  };

  closeMobileMenu = () => {
    this.setState({ click: false });
  };

  onMouseEnter = () => {
    if (window.innerWidth < 960) {
      this.setState({ dropdown: false });
    } else {
      this.setState({ dropdown: true });
    }
  };

  onMouseLeave = () => {
    if (window.innerWidth < 960) {
      this.setState({ dropdown: false });
    } else {
      this.setState({ dropdown: false });
    }
  };

  render() {
    const { click, dropdown } = this.state;

    return (
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Brenda
          <span>
            <img src={brendalogo} alt="logo" className="mylogo" />
          </span>
        </Link>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={this.closeMobileMenu}>
              Home
            </Link>
          </li>

          <li
            className="nav-item"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          >
            <Link
              to="/gallery"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              My Paintings <li className="fa fa-caret-down"></li>
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className="nav-item">
            <Link
              to="/about"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              Work
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/skills"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              Skills
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              Contact
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/register"
              className="nav-links-mobile"
              onClick={this.closeMobileMenu}
            >
              Register
            </Link>
          </li>
        </ul>

        <Button />
      </nav>
    );
  }
}

export default Navbar;
