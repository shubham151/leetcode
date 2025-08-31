import React from "react";

const ApproachBox = ({ approaches }) => {
  return (
    <div className="approach">
      <div className="approach-title">Alternative Approaches</div>
      <ul className="list">
        {approaches.map((approach, index) => (
          <li key={index} className="list-item">
            <strong>{approach.name}:</strong> {approach.complexity} -{" "}
            {approach.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApproachBox;
