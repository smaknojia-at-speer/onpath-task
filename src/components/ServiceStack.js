import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceStack = ({services}) => {
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
  )
}

export default ServiceStack