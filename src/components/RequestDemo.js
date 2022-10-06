import React from "react";
import RequestDemoForm from "./RequestDemoForm";

const RequestDemo = () => {
  return (
    <div className="container request-demo d-md-flex d-md-justify-content-between">
      <h2 className="request-demo__header">Request a Demo With Our Team</h2>
      <RequestDemoForm />
    </div>
  );
};

export default RequestDemo;
