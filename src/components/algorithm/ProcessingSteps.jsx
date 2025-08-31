import React from "react";

const ProcessingSteps = ({ title, steps, result }) => {
  return (
    <div className="processing-steps">
      <div>
        <strong>{title}</strong>
      </div>
      {steps.map((step, index) => (
        <div key={index}>{step}</div>
      ))}
      {result && (
        <div className="result-line">
          <strong>Final Result:</strong>{" "}
          <span className="highlight">{result}</span>
        </div>
      )}
    </div>
  );
};

export default ProcessingSteps;
