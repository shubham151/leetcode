import React from "react";

const CodeBlock = ({
  title = "Implementation",
  code,
  language = "javascript",
}) => {
  return (
    <div className="section">
      <div className="section-title">{title}</div>
      <div className="code-block">
        <pre>{code}</pre>
      </div>
    </div>
  );
};

export default CodeBlock;
