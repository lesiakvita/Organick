import React from "react";

export default function Offer() {
  return (
    <div className="promotions" id="promotions">
      <a className="promotion-link" href="#">
        <div className="promotion-card  promotion-card--fruits">
          <h3 className="promotion-card__title">Natural!!</h3>
          <p className="promotion-card__description">Get Garden Fresh Fruits</p>
        </div>
      </a>
      <a className="promotion-link" href="#">
        <div className="promotion-card  promotion-card--vegetables">
          <h3 className="promotion-card__title promotion-card__titlesec">
            Offer!!
          </h3>
          <p className="promotion-card__description promotion-card__descriptionsec">
            Get 10% off on Vegetables
          </p>
        </div>
      </a>
    </div>
  );
}
