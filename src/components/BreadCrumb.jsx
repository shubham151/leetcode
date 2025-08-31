import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ categoryTitle }) => {
  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link> {">"} <span>{categoryTitle}</span>
    </div>
  );
};

export default Breadcrumb;
