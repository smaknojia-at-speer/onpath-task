import React from "react";
import Button from "react-bootstrap/Button";

const CustomButton = ({ bgcolour, content, width, href }) => {
  return (
    <Button
      type="button"
      className="rounded-pill p-3"
      style={{ width }}
      variant={bgcolour}
      href={href || null}
    >
      {content}
    </Button>
  );
};

export default CustomButton;
