 import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import StartScreen from "./components/StartScreen";
import QuizPage from "./pages/QuizPage";
import ResultScreen from "./components/ResultScreen";

function App() {

  // QUESTION INDEX
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // SCORE
  const [score, setScore] = useState(0);

  // SELECTED ANSWER
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // QUIZ STATE
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  return (
    <Routes>

      {/* Start Page */}
      <Route
        path="/"
        element={
          <StartScreen
            setQuizStarted={setQuizStarted}
          />
        }
      />

      {/* Quiz Page */}
      <Route
        path="/quiz"
        element={
          <QuizPage
            currentQuestionIndex={currentQuestionIndex}
            setCurrentQuestionIndex={setCurrentQuestionIndex}
            score={score}
            setScore={setScore}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            setQuizFinished={setQuizFinished}
          />
        }
      />

      {/* Result Page */}
      <Route
        path="/result"
        element={
          <ResultScreen
            score={score}
          />
        }
      />

    </Routes>
  );
}

export default App;