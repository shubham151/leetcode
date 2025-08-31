const QuestionCard = ({ question, onClick }) => {
  const getDifficultyClass = (difficulty) => {
    switch (difficulty) {
      case "easy":
        return "easy";
      case "medium":
        return "medium";
      case "hard":
        return "hard";
      default:
        return "easy";
    }
  };

  return (
    <div className="question-card" onClick={onClick}>
      <div className="question-header">
        <h3 className="question-title">{question.title}</h3>
        <div className="question-meta">
          <span
            className={`difficulty ${getDifficultyClass(question.difficulty)}`}
          >
            {question.difficulty}
          </span>
        </div>
      </div>
      <p className="question-description">{question.description}</p>
      <div className="tags">
        {question.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
