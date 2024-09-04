import React from "react";
import qualityImage from "../img/quality/main.png";

export default function QualityStandardPage() {
  return (
    <div className="quality-standard-page">
      <section className="quality-banner">
        <h1>Quality Standard</h1>
      </section>
      <section className="quality-content">
        <div className="quality-image">
          <img src={qualityImage} alt="Quality Standard" />
        </div>
        <div className="quality-description">
          <h2>Organic Store Services</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <p>
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years.
          </p>
          <div className="quality-services">
            <div className="service-item">
              <h3>Why Organic</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </div>
            <div className="service-item">
              <h3>Speciality Produce</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </div>
          </div>
          <h3>We farm your land</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
      </section>
    </div>
  );
}
