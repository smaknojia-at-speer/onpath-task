import React from "react";
import Button from "react-bootstrap/Button";

const CustomButton = ({ bgcolour, content, width }) => {
  return (
    <Button className="rounded-pill p-3" style={{ width }} variant={bgcolour}>
      {content}
    </Button>
  );
};

export default CustomButton;
