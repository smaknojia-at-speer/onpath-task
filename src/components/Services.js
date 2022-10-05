import React from "react";
import ServiceCard from "./ServiceCard";

const Services = ({ services }) => {
  return (
    <div>
      {services.map((service, index) => (
        <div className="d-flex justify-content-center" key={index}>
          <ServiceCard
            svgImage={service.svgImage}
            bgImage={service.bgImage}
            title={service.title}
            description={service.description}
          />
        </div>
      ))}
    </div>
  );
};

export default Services;
