import React from "react";

import FooterLogo from "../../assets/svg/logo_big_white.svg";

// import "./footer.styles.scss";

const Footer = () => (
  <div className="footer">
    <div className="footer__logo-container">
      <img src={FooterLogo} alt="Footer Logo" className="footer__logo" />
    </div>
    <h5 className="footer__legal">
      © 2021 Club Rossignol. All rights reserved.
    </h5>
  </div>
);

export default Footer;
