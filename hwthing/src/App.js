import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { create, all } from 'mathjs'

let math = create(all, { })
function App() {
  return (
    <div className="App">
      <Question1 />
      <Question2 />
      <Question3 />
      <Question4 />
      <Question5 />
      <Question9 />

      {/* 
      <Question6 />
      
      
      <Question7 />
      <Question8 />
      
      <Question10 />
      <Question11 />
      <Question12 />
      <Question13 />
      <Question14 /> */}
    </div>
  );
}


// function Question1() {
//   const[parta, setParta] = useState("");
//   const[partb, setPartb] = useState("");
//   const[partc, setPartc] = useState("");
//   const[partd, setPartd] = useState("");
//   const[parte, setParte] = useState("");
//   const[partf, setPartf] = useState("");

//   const [num1, setNum1] = useState("R");
//   const [num2, setNum2] = useState("L");
//   const [num3, setNum3] = useState("C");
//   const [num4, setNum4] = useState("X (after solving part c)");
//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     let alpha = 1/(2*num1* Math.pow(10, 3) * num3  * Math.pow(10, -6))
//     let omega = 1/Math.sqrt(num2 * num3  * Math.pow(10, -6))
//     let formula1 = -alpha - Math.sqrt(Math.pow(alpha, 2) - Math.pow(omega, 2))
//     let formula2 = -alpha + Math.sqrt(Math.pow(alpha, 2) - Math.pow(omega, 2))
//     let formula3 = Math.sqrt(num2/ ((4 * num3  * Math.pow(10, -6)) - (4 * Math.pow(num3  * Math.pow(10, -6), 2) * num2 * Math.pow(num4, 2))))
//     let formula4 = 1/(2*formula3 * num3  * Math.pow(10, -6))
//     let formula5 = Math.sqrt(num2 * num3  * Math.pow(10, -6)) / (2 * num3  * Math.pow(10, -6))
    
//     setParta(formula1.toPrecision(3))
//     setPartb(formula2.toPrecision(3))
//     if (alpha > omega){
//       setPartc('over')
//     } else if (alpha == omega) {
//       setPartc('critical')
//     } else {
//       setPartc('under')
//     }
//     setPartd(formula3.toPrecision(3) + ' Ω (omega)')
//     setParte(-formula4.toPrecision(3) + '+ j' + num4 + ',' + -formula4.toPrecision(3) + '- j' + num4)
//     setPartf(formula5.toPrecision(3) + ' Ω (omega)' )
// }
//   return (
//     <>
//     <h1>Question 1</h1>
//     <form onSubmit={handleSubmit}>

//         <input
//           type="text"
//           value={num1}
//           onChange={e => setNum1(e.target.value)}
//         />
//         <input
//           type="text"
//           value={num2}
//           onChange={e => setNum2(e.target.value)}
//         />
//         <input
//           type="text"
//           value={num3}
//           onChange={e => setNum3(e.target.value)}
//         />
//         <input
//           type="text"
//           value={num4}
//           onChange={e => setNum4(e.target.value)}
//         />
//       <input type="submit" value="Submit" />
//     </form>
//     <h2>Part A: {parta}</h2>
//     <h2>Part B: {partb}</h2>
//     <h2>Part C: {partc}</h2>
//     <h2>Part D: {partd}</h2>
//     <h2>Part E: {parte}</h2>
//     <h2>Part F: {partf}</h2>
//     </>
//   )
// }
// function Question2() {
//   return(
//     <>
//     <br />
//     <h1>Question 2</h1>
//     <h2>Part A: 1000 Ω</h2>
//     <h2>Part B: 1 uF</h2>
//     <h2>Part C: 6000</h2>
//     <h2>Part D: 8</h2>
//     <h2>Part F: (-3000t+2)e^-500t</h2>
//     </>
//   )
// }

// function Question3() {
//   return(
//     <>
//     <br />
//     <h1>Question 3</h1>
//     <h2>Part A: 5e^-2000t + 10e^-8000t</h2>
//     </>
//   )
// }
// function Question4() {
//   return(
//     <>
//     <br />
//     <h1>Question 4</h1>
//     <h2>Part A: 20e^-1250t * cos(928t) - 26.67^-1250t * sin(928t)</h2>
//     </>
//   )
// }

// function Question5() {
//   const[parta, setParta] = useState("");
//   const[partb, setPartb] = useState("");
//   const[partc, setPartc] = useState("");
//   const[partd, setPartd] = useState("");
  
//   const [num1, setNum1] = useState("w");
//   const [num2, setNum2] = useState("L");
//   const [num3, setNum3] = useState("R in part A");
//   const [num4, setNum4] = useState("R in part C");
  
//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     let alpha = 125000 / num3
//     let alpha2 = 125000 / num4
//     let formula1 = Math.sqrt(Math.pow(num1, 2) - Math.pow(alpha, 2))
//     let formula2 = Math.sqrt(Math.pow(alpha2, 2) - Math.pow(num1, 2))
//     console.log(formula2);
//     if (alpha > num1){
//       setParta('over')
//     } else if (alpha == num2) {
//       setParta('critical')
//     } else {
//       setParta('under')
//     }
//     setPartb(-alpha.toPrecision(3) + '+ j' +  parseFloat(formula1.toPrecision(3)) + ',' + -alpha.toPrecision(3) + '- j' + parseFloat(formula1.toPrecision(3)))
//     if (alpha2 > num1){
//       setPartc('over')
//     } else if (alpha2 == num2) {
//       setPartc('critical')
//     } else {
//       setPartc('under')
//     }
//     setPartd(parseFloat((-alpha2 + formula2).toPrecision(3)) + ',' + parseFloat((-alpha2 - formula2).toPrecision(3)))
//   }

//   return (
//     <>
//     <h1>Question 5</h1>
//     <form onSubmit={handleSubmit}>

//         <input
//           type="text"
//           value={num1}
//           onChange={e => setNum1(e.target.value)}
//         />
//         <input
//           type="text"
//           value={num2}
//           onChange={e => setNum2(e.target.value)}
//         />
//         <input
//           type="text"
//           value={num3}
//           onChange={e => setNum3(e.target.value)}
//         />
//         <input
//           type="text"
//           value={num4}
//           onChange={e => setNum4(e.target.value)}
//         />
//       <input type="submit" value="Submit" />
//     </form>
//     <h2>Part A: {parta}</h2>
//     <h2>Part B: {partb}</h2>
//     <h2>Part C: {partc}</h2>
//     <h2>Part D: {partd}</h2>

//     </>
//   )
// }
// function Question6() {
//   return(
//     <>
//     <br />
//     <h1>Question 6</h1>
//     <h2>Part A: 12000te^-1000t * cos(928t) + 12e^-1000t</h2>
//     </>
//   )
// }
// function Question7() {
//   return(
//     <>
//     <br />
//     <h1>Question 7</h1>
//     <h2>Part A: 0.1 + 0.5e^-200t - 0.5e^-800t</h2>
//     <h2>Part B: -25e^-200t + 100e^-800t</h2>

//     </>
//   )
// }
// function Question8() {
//   return(
//     <>
//     <br />
//     <h1>Question 8</h1>
//     <h2>Part A: 20 + 80e^-800t * cos(600t) + 127.5e^-800t * sin(600t)</h2>
//     </>
//   )
// }
// function Question9() {

//   const[partc, setPartc] = useState("");
//   const[partd, setPartd] = useState("");

//   const [num1, setNum1] = useState("initial value of current");
//   const [num2, setNum2] = useState("initial voltage");
//   const handleSubmit = (evt) => {
//     let formula1 = ((2000 * num1 * Math.pow(10, -3) + 0.5 * num2) * -1000) / 1500
//     evt.preventDefault();
//     setPartc(num1)
//     setPartd(formula1.toPrecision(3))
//   }
//   return(
//     <>
//     <br />
//     <h1>Question 9</h1>
//     <form onSubmit={handleSubmit}>

//       <input
//         type="text"
//         value={num1}
//         onChange={e => setNum1(e.target.value)}
//       />
//       <input
//         type="text"
//         value={num2}
//         onChange={e => setNum2(e.target.value)}
//       />
//       <input type="submit" value="Submit" />
//     </form>
//     <h2>Part A: 8000 Ω</h2>
//     <h2>Part B: 2 H</h2>
//     <h2>Part C: {partc} mA</h2>
//     <h2>Part D: {partd} mA</h2>
//     </>
//   )
// }
// function Question10() {
//   return(
//     <>
//     <br />
//     <h1>Question 10</h1>
//     <h2>Part A: 2/3 * e^-250t + 4/3 * e^1000t</h2>
//     <h2>Part B: -267e^-250 - 133e^1000t</h2>

//     </>
//   )
// }
// function Question11() {
//   return(
//     <>
//     <br />
//     <h1>Question 11</h1>
//     <h2>Part A: -72 V</h2>
//     <h2>Part B: 144000</h2>
//     <h2>Part C: -48e^-100t - 24e^-4000t</h2>
//     </>
//   )
// }
// function Question12() {
//   return(
//     <>
//     <br />
//     <h1>Question 12</h1>
//     <h2>Part A: 20 - 10,000te^-500t - 20e^-500t</h2>
//     </>
//   )
// }
// function Question13() {
//   return(
//     <>
//     <br />
//     <h1>Question 13</h1>
//     <h2>Part A: 25 - 33.33e^-250t + 8.33e^-1000t</h2>
//     </>
//   )
// }
// function Question14() {
//   return(
//     <>
//     <br />
//     <h1>Question 14</h1>
//     <h2>Part A: 60 - 150e^-50t * cos(50t) - 200e^-50t * sin(50t)</h2>
//     </>
//   )
// }

function Question1() {
  return(
  <>
  <br />
  <h1>Question 1 (copy paste or choose the angle symbol from menu)</h1>
  <h2>Part A: {'50@PHASOR\{-45\}'}</h2>
  <h2>Part B: 125cos(2000t - 45)</h2>
  <h2>Part C: {'300.0@PHASOR\{-30\}'}</h2>
  <h2>Part D: 483.86cos(300t - 48.48)</h2>
  <h2>Part E: 120.51cos(377t + 4.8)</h2>
  <h2>Part F: Choose both the one starting with 45 and the one starting with -100</h2>
  
  </>
)
}

function Question2() {
  return(
  <>
  <br />
  <h1>Question 1</h1>
  <h2>Part A: number before cos() in the question, unit is V</h2>
  <h2>Part B: 50</h2>
  <h2>Part C: 314</h2>
  <h2>Part D: 1.05</h2>
  <h2>Part E: 60</h2>
  <h2>Part F: 0.02 s</h2>
  <h2>Part G: 6.67 ms</h2>
  <h2>Part H: num x cos(100πt)</h2>
  <h2>Part I: 11.7</h2>
  
  </>
)
}
function Question3() {

  const[parta, setParta] = useState("");

  const [num1, setNum1] = useState("number before sin() in vg");
  const handleSubmit = (evt) => {
    let formula1 = num1 * 1.0607
    evt.preventDefault();
    setParta(parseFloat(formula1.toPrecision(3)))
  }
  return(
    <>
    <br />
    <h1>Question 3</h1>
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        value={num1}
        onChange={e => setNum1(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
    <h2>Part A: {parta}, 50000, -45</h2>
    </>
  )
}
function Question4() {

  const[parta, setParta] = useState("");

  const [num1, setNum1] = useState("number before cos() in ig");
  const handleSubmit = (evt) => {
    let formula1 = num1 * 84.853
    evt.preventDefault();
    setParta(parseFloat(formula1.toPrecision(3)))
  }
  return(
    <>
    <br />
    <h1>Question 4</h1>
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        value={num1}
        onChange={e => setNum1(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
    <h2>Part A: {parta}, 2000, 45</h2>
    </>
  )
}
function Question5() {

  const[partc, setPartc] = useState("");
  const[partd, setPartd] = useState("");
  const [num1, setNum1] = useState("number before cos() in vg");
  const handleSubmit = (evt) => {
    let formula1 = num1/2.5
    evt.preventDefault();
    setPartc(num1)
    setPartd(parseFloat(formula1.toPrecision(3)))
  }
  return(
    <>
    <br />
    <h1>Question 5</h1>
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        value={num1}
        onChange={e => setNum1(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
    <h2>Part A: 1.25 H</h2>
    <h2>Part B: 5 H</h2>
    <h2>Part C: {partc}, 1000, 0</h2>
    <h2>Part D: {partd}, 1000, 0</h2>
    </>
  )
}

// function Question6() {

//   const[parta, setParta] = useState("");
//   const[partb, setPartb] = useState("");

//   const [num1, setNum1] = useState("R");
//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     let formula1 = math.evaluate(`((${num1} + ${math.complex('50 - 60i')})*(${math.complex('-100i')}))/(${num1} + ${math.complex('50 - 40i')})`)
//     let formula2 = math.evaluate(`200/(${num1} + ${math.complex('50 + 60i')})`)
//     console.log(formula1);
//     setParta(formula1.format(3))
//     setPartb(formula2.format(3))
//   }
//   return(
//     <>
//     <br />
//     <h1>Question 6</h1>
//     <form onSubmit={handleSubmit}>

//       <input
//         type="text"
//         value={num1}
//         onChange={e => setNum1(e.target.value)}
//       />
//       <input type="submit" value="Submit" />
//     </form>
//     <h2>Part A: {parta}</h2>
//     <h2>Part B: {partb}</h2>
//     </>
//   )
// }

function Question9() {

  const[parta, setParta] = useState("");

  const [num1, setNum1] = useState("number before plus sign in ig");
  const handleSubmit = (evt) => {
    let formula1 = num1 * 8
    evt.preventDefault();
    setParta(parseFloat(formula1.toPrecision(3)))
  }
  return(
    <>
    <br />
    <h1>Question 9 (copy paste or use angle sign)</h1>
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        value={num1}
        onChange={e => setNum1(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
    <h2>Part A: {parta + '.0@PHASOR\{90\}'}</h2>
    <h2>Part B: {'j' + parta}</h2>
    </>
  )
}
export default App;
