import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import Confetti from "react-confetti";
import {
Chart as ChartJS,
ArcElement,
Tooltip,
Legend
} from "chart.js";

ChartJS.register(ArcElement,Tooltip,Legend);

function ResultScreen(){

const navigate = useNavigate();
const location = useLocation();

const score = location.state?.score || 0;
const total = 10;

const data = {
labels:["Correct","Wrong"],
datasets:[
{
data:[score,total-score],
backgroundColor:["#4CAF50","#ff4d4d"]
}
]
};

return(

<div className="container">

<Confetti/>

<h1>Quiz Result</h1>

<h2>{score} / {total}</h2>

<div style={{width:"300px",margin:"auto"}}>
<Pie data={data}/>
</div>

<button onClick={()=>navigate("/")}>
Restart Quiz
</button>

</div>

);

}

export default ResultScreen;