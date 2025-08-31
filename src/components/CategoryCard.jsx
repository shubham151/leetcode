import React from "react";

const CategoryCard = ({ title, description, questionCount }) => {
  return (
    <div className="category-card">
      <h3 className="category-title">{title}</h3>
      <p className="category-description">{description}</p>
      <span className="question-count">{`${questionCount} Problems`}</span>
    </div>
  );
};

export default CategoryCard;
