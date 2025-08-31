import { Suspense } from "react";
import { useParams, Link } from "react-router-dom";
import { loadComponent } from "../utils/componentLoader";
import { questionsData } from "../constants";

const AlgorithmPage = () => {
  const { category, algorithmId } = useParams();

  // Find the question in constants
  const questions = questionsData[category] || [];
  const question = questions.find((q) => q.id === algorithmId);

  if (!question) {
    return (
      <div className="container">
        <div style={{ textAlign: "center", padding: "40px", color: "#a1a1a6" }}>
          <h2 style={{ color: "#f5f5f7", marginBottom: "16px" }}>
            Algorithm not found
          </h2>
          <p style={{ marginBottom: "24px" }}>
            No algorithm with ID "{algorithmId}" found in {category} category.
          </p>
          <Link
            to={`/category/${category}`}
            style={{ color: "#007aff", textDecoration: "none" }}
          >
            ← Back to {category} problems
          </Link>
        </div>
      </div>
    );
  }

  // Auto-load component - no registry needed!
  const AlgorithmComponent = loadComponent(category, question.component);

  return (
    <Suspense
      fallback={
        <div className="container">
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              color: "#a1a1a6",
            }}
          >
            <div
              style={{
                background: "rgba(0,122,255,0.1)",
                borderRadius: "12px",
                padding: "24px",
                display: "inline-block",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  border: "3px solid rgba(0,122,255,0.3)",
                  borderTop: "3px solid #007aff",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                  margin: "0 auto 16px",
                }}
              ></div>
              Loading {question.title}...
            </div>
          </div>
        </div>
      }
    >
      <AlgorithmComponent />
    </Suspense>
  );
};

export default AlgorithmPage;
