import React from "react";
import ServiceCard from "./ServiceCard";
import Carousel from "react-bootstrap/Carousel";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";

const Services = ({ services }) => {
  return (
    <div className="container">
      <h2 className="section-title">Why Choose Us?</h2>
      <div className="d-block d-md-none">
        <ServicesStack services={services} />
      </div>
      <div className="d-none d-md-block">
        <ServicesCarousel services={services} />
      </div>
    </div>
  );
};

const ServicesCarousel = ({ services }) => {
  return (
    <Carousel
      interval={null}
      indicators={false}
      nextIcon={<FiArrowRight color="#2F2BAB" size={40} />}
      prevIcon={<FiArrowLeft color="#2F2BAB" size={40} />}
    >
      {services.map((service, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-center">
            <ServiceCard
              svgImage={service.svgImage}
              bgImage={service.bgImage}
              title={service.title}
              description={service.description}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

const ServicesStack = ({ services }) => {
  return (
    <>
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
    </>
  );
};

export default Services;
