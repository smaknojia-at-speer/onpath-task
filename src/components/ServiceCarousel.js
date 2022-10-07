import React from 'react';
import { Carousel } from 'react-bootstrap';
import {FiArrowRight, FiArrowLeft} from 'react-icons/fi';
import ServiceCard from './ServiceCard'
    
// Mobile Carousel
const ServiceCarousel = ({ services }) => {
  return (
    <Carousel
      // currently interval is off, will add the timer for interval once confirmed
      interval={2000}
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

export default ServiceCarousel;