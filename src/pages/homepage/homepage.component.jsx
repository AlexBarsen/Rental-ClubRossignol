import React from "react";

// import "./homepage.styles.scss";

import Feature from "../../components/feature/feature.component";
import FeaturesData from "../../components/feature/features";
import Gallery from "../../components/gallery/gallery.component";
import BookingReviews from "../../components/booking-reviews/booking-reviews.component";
import SocialMedia from "../../components/social-media/social-media.component";

const HomePage = () => (
  <div className="homepage background">
    <div className="social-media">
      <SocialMedia />
    </div>

    <h1 className="heading">
      Club Rossignol la baza partiei in Poiana Brasov din anul 1999
    </h1>
    <p className="paragraph">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, neque
      libero at commodi eligendi provident cupiditate rerum ratione minus
      cumque? Quaerat exercitationem rerum ut tempora consectetur veniam tempore
      unde blanditiis.
    </p>

    <div className="gallery-booking-container">
      <Gallery />
      <BookingReviews />
    </div>

    <h1 className="heading">
      Club Rossignol iti pune la dispozitie urmatoarele:
    </h1>

    <div className="features-container">
      {FeaturesData.map((feature) => (
        <Feature key={feature.id} feature={feature} />
      ))}
    </div>

    {/* <div className="rental">
      <h1 className="rental--heading">
        Inchieriere ecjipamente Ski si Snowboard online
      </h1>
      La noi puteti inchiria echipamente pentru Ski si Snowboard direct online,
      iar a doua zi de dimineata te asptetam sa le ridici de la centrul nostru
      de inchirieri
    </div> */}
  </div>
);

export default HomePage;
