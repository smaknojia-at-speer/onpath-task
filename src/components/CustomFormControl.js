import React from "react";
import { Form } from "react-bootstrap";

const CustomFormControl = ({ label, type }) => {
  return (
    <Form.Group
      className="mb-3 custom-form-group"
      controlId="exampleForm.ControlInput1"
    >
      <Form.Label className="custom-form-group__label">{label}</Form.Label>
      <Form.Control type={type} placeholder="" className="input-border" />
    </Form.Group>
  );
};

export default CustomFormControl;
