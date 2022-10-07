import React from "react";
import { Form } from "react-bootstrap";
import CustomButton from "./CustomButton";
import CustomFormControl from "./CustomFormControl";

const RequestDemoForm = () => {
  return (
    <Form className="requested-demo-form container">
      <div className="d-md-flex d-md-justify-content-between requested-demo-form-name">
        <CustomFormControl label="First Name" type="text" />
        <CustomFormControl label="Last Name" type="text" />
      </div>
      <CustomFormControl label="Region" type="text" />
      <CustomFormControl label="Email Address" type="email" />
      <CustomFormControl label="Phone" type="number" />
      <CustomFormControl label="Industry" type="text" />
      <div className="request-demo-form__button">
        <CustomButton
          width={"100%"}
          bgcolour="primary"
          content="Request Demo"
        />
      </div>
    </Form>
  );
};

export default RequestDemoForm;
