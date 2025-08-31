import React from "react";

const ExampleBox = ({ title = "Example Walkthrough", children }) => {
  return (
    <div className="example">
      <div className="example-title">{title}</div>
      {children}
    </div>
  );
};

export default ExampleBox;
