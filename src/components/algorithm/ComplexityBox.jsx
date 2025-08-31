import React from "react";

const ComplexityBox = ({ timeComplexity, spaceComplexity }) => {
  return (
    <div className="complexity">
      <div className="complexity-box">
        <div className="complexity-title">Time Complexity</div>
        <div className="complexity-value">{timeComplexity.value}</div>
        <div className="complexity-description">
          {timeComplexity.description}
        </div>
      </div>
      <div className="complexity-box">
        <div className="complexity-title">Space Complexity</div>
        <div className="complexity-value">{spaceComplexity.value}</div>
        <div className="complexity-description">
          {spaceComplexity.description}
        </div>
      </div>
    </div>
  );
};

export default ComplexityBox;
