import React from "react";

const Step = ({ number, title, description }) => {
  return (
    <div className="step">
      <span className="step-number">{number}</span>
      <div className="step-content">
        <strong>{title}</strong> {description}
      </div>
    </div>
  );
};

export default Step;
