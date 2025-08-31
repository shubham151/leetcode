//Shows when component file is missing
import React from "react";
import { Link, useParams } from "react-router-dom";
import { SlideContainer, AlgorithmTitle } from "../components/algorithm";

const FallbackComponent = () => {
  const { category, algorithmId } = useParams();

  return (
    <SlideContainer>
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <AlgorithmTitle title="Component Not Found" />

        <div
          style={{
            background: "rgba(255,59,48,0.1)",
            border: "1px solid rgba(255,59,48,0.3)",
            borderRadius: "16px",
            padding: "32px",
            margin: "40px 0",
            color: "#ff3b30",
          }}
        >
          <h3 style={{ marginBottom: "16px" }}>Missing Component File</h3>
          <p style={{ marginBottom: "20px", color: "#a1a1a6" }}>
            The component file could not be found. Please create:
          </p>
          <code
            style={{
              background: "rgba(255,255,255,0.1)",
              padding: "8px 12px",
              borderRadius: "8px",
              display: "inline-block",
              color: "#f5f5f7",
            }}
          >
            src/algorithms/{category}/{algorithmId}.jsx
          </code>
        </div>

        <div
          style={{
            background: "rgba(255,149,0,0.1)",
            border: "1px solid rgba(255,149,0,0.3)",
            borderRadius: "16px",
            padding: "24px",
            margin: "32px 0",
            textAlign: "left",
          }}
        >
          <h4 style={{ color: "#ff9500", marginBottom: "16px" }}>
            Quick Setup:
          </h4>
          <ol style={{ color: "#a1a1a6", lineHeight: "1.6" }}>
            <li>
              Create the file:{" "}
              <code>
                src/algorithms/{category}/{algorithmId}.jsx
              </code>
            </li>
            <li>Copy the algorithm template</li>
            <li>Fill in your algorithm details</li>
            <li>Refresh the page</li>
          </ol>
        </div>

        <div style={{ marginTop: "40px" }}>
          <Link
            to={`/category/${category}`}
            style={{
              background: "rgba(0,122,255,0.1)",
              color: "#007aff",
              padding: "12px 24px",
              borderRadius: "12px",
              textDecoration: "none",
              border: "1px solid rgba(0,122,255,0.2)",
              marginRight: "16px",
              display: "inline-block",
            }}
          >
            ← Back to {category}
          </Link>

          <Link
            to="/"
            style={{
              color: "#a1a1a6",
              textDecoration: "none",
            }}
          >
            Home
          </Link>
        </div>
      </div>
    </SlideContainer>
  );
};

export default FallbackComponent;
