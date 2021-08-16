import React from "react";

const RentalModalInfo = ({ startDate, endDate, days }) => (
  <>
    <span className="modal__message">
      Rezervarile se pot face doar pentru ziua ce urmeaza, respectiv din{" "}
      {startDate}. Va rugam sa fiti atenti la completarea datelor!
    </span>
    <span className="modal__date--description">
      Din data de: <span className="modal__date--content">{startDate}</span>
    </span>
    <span className="modal__date--description">
      Pana in data de: <span className="modal__date--content">{endDate}</span>
    </span>
    <span className="modal__date--description">
      Durata inchiriere:{" "}
      <span className="modal__date--content">
        {days} {days === 1 ? "zi" : "zile"}
      </span>
    </span>
  </>
);

export default RentalModalInfo;
