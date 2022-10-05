import React from "react";

const ServiceCard = ({ svgImage, bgImage, title, description }) => {
  console.log(svgImage);
  return (
    <section className="service-card">
      <div className="sc-image-container">
        <div className="sci-bg-image position-relative">
          <img src={svgImage} alt="svg" />
          <img className="position-absolute" src={bgImage} alt="svg" />
        </div>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
};

export default ServiceCard;
