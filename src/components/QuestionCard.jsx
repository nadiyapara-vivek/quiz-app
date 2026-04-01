import React from "react";

function QuestionCard({
  question,
  selectedAnswer,
  setSelectedAnswer,
  showAnswer
}) {

  const handleClick = (option) => {
    if (!showAnswer) {
      setSelectedAnswer(option);
    }
  };

  return (
    <div className="card fade-slide">

      <h2>{question.question}</h2>

      {question.options.map((option, index) => {

        let className = "option";

        // BEFORE SUBMIT
        if (!showAnswer && selectedAnswer === option) {
          className = "option selected";
        }

        // AFTER SUBMIT
        if (showAnswer) {

          if (option === question.answer) {
            className = "option correct";
          }

          else if (option === selectedAnswer) {
            className = "option wrong";
          }

        }

        return (
          <button
            key={index}
            className={className}
            onClick={() => handleClick(option)}
          >
            {option}
          </button>
        );

      })}

      {/* Explanation Section */}

      {showAnswer && (
        <div className="explanation">

          <h4>Explanation</h4>

          <p>{question.explanation}</p>

        </div>
      )}

    </div>
  );
}

export default QuestionCard;