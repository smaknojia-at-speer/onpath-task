import React, { useState, useRef } from "react";
import {  FiArrowRight } from "react-icons/fi";
import SolutionCard from "./SolutionCard";

const Solutions = () => {
  const [offsetX, setOffsetX] = useState(0);
  /**
   * @type { { current: HTMLElement } }
   */
  const solutionsWrapper = useRef(null);

  const clickHandler = () => {
    solutionsWrapper.current.scrollTo({
      left: offsetX + 200,
      behavior: "smooth"
    });
  };

  const scrollHandler = () => {
    setOffsetX(solutionsWrapper.current.scrollLeft);
  };

  return (
    <div className="solutions position-relative">
      <div className="container" style={{ height: "730px" }}>
        <div className="solutions__content">
          <h2 className="text-white solutions__content--title">
            Our Solutions
          </h2>
          <p className="text-white font-inter solutions__content--info">
            Discover our customizable feature set created to support a seamless
            fleet management experience.
          </p>
          <div
            className="solutioncard-wrapper"
            ref={solutionsWrapper}
            onScroll={scrollHandler}
          >
            <SolutionCard />
          </div>
          <div>
            
          {/* Figma doesn't have left arrow, but kept it incase we want to use,pending styling
            <div>
              <FiArrowLeft />
            </div> */}
            <button
              onClick={clickHandler}
              className="position-absolute solution-button svg-right-arrow"
            >
              <FiArrowRight color="#fff" size={45} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
