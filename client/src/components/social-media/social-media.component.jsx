import React from "react";

import FacebookIcon from "../../assets/svg/facebook.svg";
import InstagramIcon from "../../assets/svg/instagram.svg";

const SocialMedia = () => (
  <div className="social-media--container">
    <a
      href="https://ro-ro.facebook.com/clubrossingol/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={FacebookIcon} alt="Facebook Icon" className="icon" />
    </a>
    <a
      href="https://www.instagram.com/clubrossignol/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={InstagramIcon}
        alt="Instagram
         Icon"
        className="icon"
      />
    </a>
  </div>
);

export default SocialMedia;
