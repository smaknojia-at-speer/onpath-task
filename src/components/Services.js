import React from "react";
import ServicesStack from "./ServiceStack";
import ServiceCarousel  from "./ServiceCarousel";

const Services = ({ services }) => {
  return (
    <div className="container">
      <h2 className="section-title">Why Choose Us?</h2>
      {/* for mobile screen */}
      <div className="d-block d-md-none">
        <ServicesStack services={services} />
      </div>
      {/* for larger screen */}
      <div className="d-none d-md-block">
        <ServiceCarousel services={services} />
      </div>
    </div>
  );
};

export default Services;
