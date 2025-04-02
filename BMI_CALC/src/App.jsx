  import React from "react";
  import { useState } from "react";

  function App() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [BMI, setBMI] = useState("");
    const [message, setMessage] = useState("");
    const calcBMI = () => {
      if (!weight || !height) {
        alert("Please enter a valid weight and height");
        return;
      }

      // Convert weight (kg to lbs) and height (cm to inches)
      let weightInLbs = weight * 2.20462;
      let heightInInches = height / 2.54;

      let bmi = (weightInLbs / (heightInInches * heightInInches)) * 703;
      setBMI(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("Underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("Normal weight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("Overweight");
      } else {
        setMessage("Obese");
      }
    };

    const reload = () => {
      setWeight("");
      setHeight("");
      setBMI("");
      setMessage("");
    };

    return (
      <>
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow-2xl w-80 text-center">
            <h1 className="text-3xl font-bold p-5">BMI Calculator</h1>

            <label htmlFor="weight" className="">Weight (kg)</label>
            <input
              type="text"
              id="weight"
              value={weight}
              placeholder="Enter weight in kg"
              className="border p-2 m-2"
              onChange={(e)=>setWeight(e.target.value)}
            />
            <br />
            <br />

            <label htmlFor="height">Height (cm)</label>
            <input
              type="text"
              id="height"
              value={height}
              placeholder="Enter height in cm"
              className="border p-2 m-2"
              onChange={(e)=>setHeight(e.target.value)}
            />
            <br /><br />
            <button className=" w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200" onClick={calcBMI} >  Submit</button>
            <br /><br />
            <button className=" w-full py-2 bg-gray-400 text-white font-semibold rounded-md hover:bg-gray-600 transition duration-200" onClick={reload}> Reload</button>
              
            {BMI && (
            <div className="mt-4 text-lg font-semibold">
              Your BMI: <span className="text-blue-500">{BMI}</span>
              <p className="text-gray-700">{message}</p>
            </div>
          )}
          </div>
        </div>
      </>
    );
  }

  export default App;
