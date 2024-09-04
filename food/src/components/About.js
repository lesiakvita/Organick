import React from "react";
import fruitImage from "../img/bg_about.png";

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-section__image">
        <img src={fruitImage} alt="Fruits" />
        {}
        <div className="about-section__content">
          <h3 className="about-section__subtitle">About Us</h3>
          <h1 className="about-section__title">
            We Believe in Working Accredited Farmers
          </h1>
          <p className="about-section__text">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry’s standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="about-section__features">
            <div className="feature-item">
              <div className="feature-item__icon">{}</div>
              <div className="feature-item__content">
                <h4>Organic Foods Only</h4>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-item__icon"></div>
              <div className="feature-item__content">
                <h4>Quality Standards</h4>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          <button className="about-section__button">Shop Now</button>
        </div>
      </div>
    </section>
  );
}
