import { Suspense } from "react";
import { useParams, Link } from "react-router-dom";
import { loadComponent } from "../utils/componentLoader";
import { questionsData } from "../constants";

const AlgorithmPage = () => {
  const { categoryId, algorithmId } = useParams();

  if (!categoryId || !algorithmId) {
    return (
      <div className="container">
        <div style={{ textAlign: "center", padding: 40, color: "#a1a1a6" }}>
          <h2 style={{ color: "#f5f5f7", marginBottom: 16 }}>Invalid URL</h2>
          <Link to="/" style={{ color: "#007aff", textDecoration: "none" }}>
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Find the question in constants
  const questions = questionsData[categoryId] || [];
  const question = questions.find((q) => String(q.id) === String(algorithmId));

  if (!question) {
    return (
      <div className="container">
        <div style={{ textAlign: "center", padding: 40, color: "#a1a1a6" }}>
          <h2 style={{ color: "#f5f5f7", marginBottom: 16 }}>
            Algorithm not found
          </h2>
          <p style={{ marginBottom: 24 }}>
            No algorithm with ID "{algorithmId}" found in {categoryId} category.
          </p>
          <Link
            to={`/category/${categoryId}`}
            style={{ color: "#007aff", textDecoration: "none" }}
          >
            ← Back to {categoryId} problems
          </Link>
        </div>
      </div>
    );
  }

  const AlgorithmComponent = loadComponent(categoryId, question.component);

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
                display: "inline-block",
                background: "rgba(28,28,30,0.4)",
                borderRadius: "12px",
                padding: "24px",
                minWidth: 280,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  border: "3px solid rgba(0,122,255,0.3)",
                  borderTop: "3px solid #007aff",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                  margin: "0 auto 16px",
                }}
              ></div>
              <div>Loading algorithm…</div>
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
