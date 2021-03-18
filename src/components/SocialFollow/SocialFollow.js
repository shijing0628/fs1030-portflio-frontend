import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./style.css";

export default function SocialFollow() {
  return (
    <div className="social-container">
      <a href="https://www.youtube.com" className="youtube social">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a href="https://www.facebook.com" className="facebook social">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.linkedin" className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://www.twitter.com" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.instagram.com" className="instagram social">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
}
