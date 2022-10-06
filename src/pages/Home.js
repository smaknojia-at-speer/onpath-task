import React from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";

import morflax from "../assets/morflax-studio.png";
import phone from "../assets/phone.svg";
import device from "../assets/device.png";

import svgImage from "../assets/contract-group-hero.svg";
import svgImage2 from "../assets/contract-group-hero2.svg";
import RequestDemo from "../components/RequestDemo";
import Footer from "../components/Footer";

const services = [
  {
    svgImage: svgImage,
    bgImage: morflax,
    title: "Lorem Ipsum",
    description:
      "Create a contract in under 60 seconds using your smart phone or tablet. This contactless and paperless solution connects directly to the OnPath web admin portal for a seamless experience."
  },
  {
    svgImage: svgImage2,
    bgImage: phone,
    title: "Lorem Ipsum",
    description:
      "Create a contract in under 60 seconds using your smart phone or tablet. This contactless and paperless solution connects directly to the OnPath web admin portal for a seamless experience."
  },
  {
    svgImage: svgImage,
    bgImage: device,
    title: "Lorem Ipsum",
    description:
      "Create a contract in under 60 seconds using your smart phone or tablet. This contactless and paperless solution connects directly to the OnPath web admin portal for a seamless experience."
  }
];

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div style={{ marginTop: "150px" }}>
        <Services services={services} />
      </div>
      <RequestDemo />
      <Footer />
    </div>
  );
};

export default Home;
