import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
function App() {
  return (
    <div className="App">
      <Question1 />
      <Question2 />
      <Question3 />
      <Question4 />
    </div>
  );
}

function Question1() {
  const[parta, setParta] = useState("");
  const[partb, setPartb] = useState("");
  const[partc, setPartc] = useState("");
  const[partd, setPartd] = useState("");
  const[parte, setParte] = useState("");
  const[partf, setPartf] = useState("");

  const [num1, setNum1] = useState("R");
  const [num2, setNum2] = useState("L");
  const [num3, setNum3] = useState("C");
  const [num4, setNum4] = useState("X (after solving part c)");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    let alpha = 1/(2*num1* Math.pow(10, 3) * num3  * Math.pow(10, -6))
    let omega = 1/Math.sqrt(num2 * num3  * Math.pow(10, -6))
    let formula1 = -alpha - Math.sqrt(Math.pow(alpha, 2) - Math.pow(omega, 2))
    let formula2 = -alpha + Math.sqrt(Math.pow(alpha, 2) - Math.pow(omega, 2))
    let formula3 = Math.sqrt(num2/ ((4 * num3  * Math.pow(10, -6)) - (4 * Math.pow(num3  * Math.pow(10, -6), 2) * num2 * Math.pow(num4, 2))))
    let formula4 = 1/(2*formula3 * num3  * Math.pow(10, -6))
    let formula5 = Math.sqrt(num2 * num3  * Math.pow(10, -6)) / (2 * num3  * Math.pow(10, -6))
    console.log(alpha);
    setParta(formula1.toPrecision(3))
    setPartb(formula2.toPrecision(3))
    if (alpha > omega){
      setPartc('over')
    } else if (alpha == omega) {
      setPartc('critical')
    } else {
      setPartc('under')
    }
    setPartd(formula3.toPrecision(3) + ' Ω (omega)')
    setParte(-formula4.toPrecision(3) + '+ j' + num4 + ',' + -formula4.toPrecision(3) + '- j' + num4)
    setPartf(formula5.toPrecision(3) + ' Ω (omega)' )
}
  return (
    <>
    <h1>Question 1</h1>
    <form onSubmit={handleSubmit}>

        <input
          type="text"
          value={num1}
          onChange={e => setNum1(e.target.value)}
        />
        <input
          type="text"
          value={num2}
          onChange={e => setNum2(e.target.value)}
        />
        <input
          type="text"
          value={num3}
          onChange={e => setNum3(e.target.value)}
        />
        <input
          type="text"
          value={num4}
          onChange={e => setNum4(e.target.value)}
        />
      <input type="submit" value="Submit" />
    </form>
    <h2>Part A: {parta}</h2>
    <h2>Part B: {partb}</h2>
    <h2>Part C: {partc}</h2>
    <h2>Part D: {partd}</h2>
    <h2>Part E: {parte}</h2>
    <h2>Part F: {partf}</h2>
    </>
  )
}
function Question2() {
  return(
    <>
    <br />
    <h1>Question 2</h1>
    <h2>Part A: 1000 Ω</h2>
    <h2>Part B: 1 uF</h2>
    <h2>Part C: 6000</h2>
    <h2>Part D: 8</h2>
    <h2>Part F: (-3000t+2)e^-500t</h2>
    </>
  )
}

function Question3() {
  return(
    <>
    <br />
    <h1>Question 3</h1>
    <h2>Part A: 5e^-2000t + 10e^-8000t</h2>
    </>
  )
}
function Question4() {
  return(
    <>
    <br />
    <h1>Question 4</h1>
    <h2>Part A: 20e^-1250t * cos(928t) - 26.67^-1250t * sin(928t)</h2>
    </>
  )
}
export default App;
