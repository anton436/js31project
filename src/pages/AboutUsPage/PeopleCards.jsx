import React from "react";
import "../AboutUsPage/styles/PeopleCards.css";

const PeopleCards = () => {
  return (
    <div className="peopContainer lol">
      <div className="category__container">
        <span>MANAGEMENT BOARD</span>
        <span>SUPERVISORY BOARD</span>
      </div>
      <div className="cards__container">
        <div className="cards__card">
          <div className="text__block">
            <h5>ARNE FREUNDT</h5>
            <p>CEO, CCO</p>
          </div>
        </div>
        <div className="cards__card">
          <div className="text__block">
            <h5>ANNE-LAURE DESCOURS</h5>
            <p>CHIEF SOURCING OFFICER</p>
          </div>
        </div>
        <div className="cards__card">
          <div className="text__block">
            <h5>HUBERT HINTERSEHER</h5>
            <p>CHIEF FINANCIAL OFFICER</p>
          </div>
        </div>
        <div className="cards__card">
          <div className="text__block">
            <h5>MARIA VALDES</h5>
            <p>CHIEF PRODUCT OFFICER</p>
          </div>
        </div>
      </div>
      <button className="btn__people">MEET THE MANAGEMENT</button>
    </div>
  );
};

export default PeopleCards;
