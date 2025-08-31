import { useParams, Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../components/BreadCrumb";
import QuestionCard from "../components/QuestionCard";
import { categories, questionsData } from "../constants";

const CategoryView = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate(); // using `useNavigate` instead of `window.location.href`

  const category = categories.find((cat) => cat.id === categoryId);
  const questions = questionsData[categoryId] || [];

  if (!category) {
    return (
      <div className="container">
        <div style={{ textAlign: "center", padding: "40px", color: "#a1a1a6" }}>
          <h2 style={{ color: "#f5f5f7", marginBottom: "16px" }}>
            Category not found
          </h2>
          <Link to="/" style={{ color: "#007aff", textDecoration: "none" }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleQuestionClick = (id) => {
    navigate(`/category/${categoryId}/${id}`);
  };

  return (
    <div className="container">
      <Breadcrumb categoryTitle={category.title} />

      <Link to="/" className="back-btn">
        ← Back
      </Link>

      <div className="questions-list active">
        {questions.length === 0 ? (
          <div
            style={{ textAlign: "center", padding: "40px", color: "#a1a1a6" }}
          >
            <h3 style={{ color: "#f5f5f7", marginBottom: "16px" }}>
              No questions available yet
            </h3>
            <p>Questions for {category.title} will be added soon.</p>
          </div>
        ) : (
          <div id="questionsList">
            {questions.map((question, index) => (
              <QuestionCard
                key={index}
                question={question}
                onClick={() => handleQuestionClick(question.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryView;
