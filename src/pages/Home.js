import React from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { services } from "./../components/Utils";
import RequestDemo from "../components/RequestDemo";
import Footer from "../components/Footer";
import Solutions from "../components/Solutions";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div style={{ marginTop: "150px" }}>
        <Services services={services} />
      </div>
      <Solutions />
      <RequestDemo />

      <Footer />
    </div>
  );
};

export default Home;
