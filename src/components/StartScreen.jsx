import React from "react";
import { useNavigate } from "react-router-dom";

function StartScreen({ setQuizStarted }) {

  const navigate = useNavigate();

  // START QUIZ
  const startQuiz = () => {
    setQuizStarted(true);
    navigate("/quiz");
  };

  const lastScore = localStorage.getItem("lastScore");

  return (
    <div className="container">

      <h1>Interactive Quiz App</h1>


       <div className="info-box">
      <h3>10</h3>
      <p>Questions</p>
    </div>


    

      <p>Test your React knowledge!</p>

      

      <button onClick={startQuiz}>
        Start Quiz
      </button>

    </div>
  );
}

export default StartScreen;