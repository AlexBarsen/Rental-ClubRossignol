import React from "react";

import ContactForm from "../../components/contact-form/contact-form.component";
import GoogleApiWrapper from "../../components/google-maps/google-maps.component";

// import "./contact.styles.scss";

const ContactPage = () => (
  <div className="contact-page">
    <div className="wrapper-2">
      <h1 className="contact-page__heading">Contacteaza-ne</h1>
      <div className="phone-number">
        <div className="phone-number--1">Tel: 0742 956 198</div>
        <div className="phone-number--2">0799 570 326</div>
        <div className="phone-number--3">0722 222 314</div>
      </div>
    </div>
    <div className="wrapper">
      <ContactForm></ContactForm>
      <div className="google-maps">
        <GoogleApiWrapper />
        <span className="google-maps__address">
          Strada Drumul Sulinar nr. 1, Poiana Brasov 500001
        </span>
      </div>
    </div>
  </div>
);

export default ContactPage;
