import React, { useState } from "react";
import questions from "../data/questions.json";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";

function QuizPage() {

const navigate = useNavigate();

const [current,setCurrent] = useState(0);
const [score,setScore] = useState(0);
const [selectedAnswer,setSelectedAnswer] = useState(null);
const [showAnswer,setShowAnswer] = useState(false);

const question = questions[current];

const handleNext = () => {

if(selectedAnswer === question.answer){
setScore(score + 1);
}

setShowAnswer(false);
setSelectedAnswer(null);

if(current + 1 < questions.length){
setCurrent(current + 1);
}
else{
localStorage.setItem("lastScore",score);
navigate("/result",{state:{score}});
}

};

const handlePrevious = () => {

if(current > 0){
setCurrent(current - 1);
setSelectedAnswer(null);
setShowAnswer(false);
}

};

const checkAnswer = () => {

if(!selectedAnswer) return;

setShowAnswer(true);

};

return (

<div className="container">

<h3>
Question {current+1} / {questions.length}
</h3>

<ProgressBar
current={current+1}
total={questions.length}
/>

<QuestionCard
key={current}
question={question}
selectedAnswer={selectedAnswer}
setSelectedAnswer={setSelectedAnswer}
showAnswer={showAnswer}
/>

<div className="nav-buttons">

<button
onClick={handlePrevious}
disabled={current===0}
>
Previous
</button>

<button
onClick={checkAnswer}
disabled={!selectedAnswer}
>
Submit
</button>

<button
onClick={handleNext}
>
Next
</button>

</div>

</div>

);

}

export default QuizPage;