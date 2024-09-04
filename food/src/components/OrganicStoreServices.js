import React from "react";
import serviceImage from "../img/service.jpg";

export default function OrganicStoreServices() {
  return (
    <section className="organic-store-services">
      <div className="organic-store-services__image">
        <img src={serviceImage} alt="Organic Store" />
      </div>
      <div className="organic-store-services__content">
        <h1>Organic Store Services</h1>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <p>
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and auncov er many web sites still
          in their infancy. Various versions have evolved over the years.
        </p>
      </div>
      <div className="organic-store-services__features">
        <div className="feature-item">
          <img src="path/to/feature1.jpg" alt="Why Organic" />
          <h3>Why Organic</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </div>
        <div className="feature-item">
          <img src="path/to/feature2.jpg" alt="Speciality Produce" />
          <h3>Speciality Produce</h3>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </div>
      </div>
      <div className="organic-store-services__benefits">
        <div className="benefit-item">
          <h4>01</h4>
          <p>Best quality support</p>
        </div>
        <div className="benefit-item">
          <h4>02</h4>
          <p>Money back guarantee</p>
        </div>
      </div>
    </section>
  );
}
