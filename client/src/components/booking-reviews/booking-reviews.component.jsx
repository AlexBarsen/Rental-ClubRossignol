import React from "react";

import BookingLogo from "../../assets/svg/booking.svg";

const BookingReviews = () => (
  <div className="booking-reviews">
    <img src={BookingLogo} alt="" className="booking-reviews__logo" />

    <ul className="booking-reviews__scores">
      <li>
        Facilitati: <span className="booking-reviews__grades">9.1</span>
      </li>
      <li>
        Curatenie: <span className="booking-reviews__grades">9.3</span>
      </li>
      <li>
        Confort: <span className="booking-reviews__grades">8.8</span>
      </li>
      <li>
        Raport calitate/pret:{" "}
        <span className="booking-reviews__grades">8.9</span>
      </li>
      <li>
        Locatie: <span className="booking-reviews__grades">9.8</span>
      </li>
    </ul>
    <div className="booking-reviews__score">
      Score: <span className="booking-rewviws__grade">9.1</span>
    </div>
    <a href="https://bit.ly/3g0lhaZ" className="booking-reviews__reserve">
      Rezerva acum
    </a>
  </div>
);

export default BookingReviews;
