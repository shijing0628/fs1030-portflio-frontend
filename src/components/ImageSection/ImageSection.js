import React from "react";
import cv from "../../files/full-stack-brenda.pdf";
import me from "../../images/me.jpg";

export default function ImageSection() {
  const openResume = () => {
    window.open(cv);
  };
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={me} alt="brenda liu" style={{ transform: "scale(1.1)" }} />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Brenda Liu</span>
        </h4>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          necessitatibus perferendis numquam dolorem cumque facilis. Desir per
          po la ta doso vi slone ve?
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Countries</p>
          </div>
          <div className="right-section">
            <p> Brenda Liu</p>
            <p> Chinese</p>
            <p> Mandarin, English, Japanese</p>
            <p> 123 Street, BN7 GB9, Winnipeg</p>
            <p> Canada</p>
          </div>
        </div>

        <button className="btn btn-cv" onClick={openResume}>
          Download CV
        </button>
      </div>
    </div>
  );
}
