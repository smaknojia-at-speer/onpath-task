import React from "react";
import { solutions } from "./Utils";

const SolutionCard = () => {
  return (
    <div className="d-flex">
      {solutions.map((solution, index) => (
        <div key={index} className="d-flex mx-2 solution-card-container">
          <div className="solution-card__container">
            <img
              className="solution-card__container--img"
              src={solution.svgImage}
              alt="book"
            />
            <h2
              className="text-white solution-card____container--title"
              style={{ margin: "16px 0" }}
            >
              {solution.title}
            </h2>
            <p className="text-white font-inter text-white solution-card__container--description">
              {solution.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SolutionCard;
