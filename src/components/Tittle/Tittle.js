import React from "react";
import "./style.css";

function Tittle({ title, span }) {
  return (
    <div className="Title">
      <h3>
        {title}
        <span> {span}</span>
      </h3>
    </div>
  );
}

export default Tittle;
