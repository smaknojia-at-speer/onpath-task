import React from "react";
import { Form } from "react-bootstrap";

const CustomFormControl = ({ label, text }) => {
  return (
    <Form.Group
      className="mb-3 custom-form-group"
      controlId="exampleForm.ControlInput1"
    >
      <Form.Label className="custom-form-group__label">{label}</Form.Label>
      <Form.Control type={text} placeholder="" className="input-border" />
    </Form.Group>
  );
};

export default CustomFormControl;
