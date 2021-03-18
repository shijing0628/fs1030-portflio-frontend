import "./Button.css";
import React from "react";
import { Link } from "react-router-dom";

function Button() {
  return (
    <Link to="/register">
      <button className="btn nav-btn nav-cv">Login/SignUp</button>
    </Link>
  );
}

export default Button;
