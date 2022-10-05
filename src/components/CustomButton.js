import React from "react";
import Button from "react-bootstrap/Button";

const CustomButton = ({ bgcolour, content }) => {
  return (
    <Button className="rounded" variant={bgcolour}>
      {content}
    </Button>
  );
};

export default CustomButton;
