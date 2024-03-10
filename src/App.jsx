import { React, useState } from "react";
import "./App.css";

function App() {
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setbmi] = useState("");
  const [message, setmessage] = useState("");

  let finalresult = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Enter a valid height weight.");
    } else {
      const finalbmi = weight / (height * height);
      setbmi(finalbmi.toFixed(2));

      if (finalbmi < 18.5) {
        setmessage("You are underweight");
      } else if (finalbmi > 18.5 && finalbmi < 24.9) {
        setmessage("You are healthy");
      } else {
        setmessage("You are overweight");
      }
    }
  };

  return (
    <>
      <div className="App">
        <div className="container">
          <h1>BMI Calculator</h1>
          <form onSubmit={finalresult}>
            <label htmlFor="weight">Enter Weight (in kg)</label>
            <input
              type="text"
              placeholder="Weight"
              name="weight"
              value={weight}
              onChange={(e) => setweight(e.target.value)}
            />
            <br />
            <label htmlFor="height">Enter Height (in m)</label>
            <input
              type="text"
              placeholder="height"
              name="height"
              value={height}
              onChange={(event) => setheight(event.target.value)}
            />
            <br />
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
          <div className="result">
            <h3 className="answer">BMI is {bmi}</h3>
            <p>{message}</p>
          </div>
        </div>
        <div className="about">
          <h2>By Ujjawal Patidar</h2>
          <h3>This site is created using React.</h3>
        </div>
      </div>
    </>
  );
}

export default App;
