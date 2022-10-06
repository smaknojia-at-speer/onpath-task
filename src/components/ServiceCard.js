import React from "react";

const ServiceCard = ({ svgImage, bgImage, title, description }) => {
  return (
    <section className="service-card text-center d-md-flex justify-content-center">
      <div className="d-md-flex flex-row-reverse justify-content-center align-items-center">
        <div className="sc-image-container d-flex justify-content-center">
          <div className="sci-bg-image position-relative">
            <img src={svgImage} alt="svg" />
            <img className="position-absolute" src={bgImage} alt="svg" />
          </div>
        </div>
        <h3 className="sci-title">{title}</h3>
      </div>
      <p className="sci-description d-md-flex align-items-center">
        {description}
      </p>
    </section>
  );
};

export default ServiceCard;
