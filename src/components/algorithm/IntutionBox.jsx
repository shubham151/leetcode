import React from "react";

const IntuitionBox = ({ children }) => {
  return (
    <div className="intuition">
      <div className="intuition-title">💡 Key Intuition</div>
      {children}
    </div>
  );
};

export default IntuitionBox;
