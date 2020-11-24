import { useState } from "react";

function App() {
  let chart = {
    "Charter": {
      "Daily": 1000,
      "Hourly": 400,
      "Distance": 3.5
    },
    "Mini Bus": {
      "Daily": 925,
      "Hourly": 360,
      "Distance": 3.25
    },
    "Sprinter": {
      "Daily": 850,
      "Hourly": 320,
      "Distance": 3
    },
    "Party Bus": {
      "Daily": 775,
      "Hourly": 280,
      "Distance": 2.75
    },
    "Sedan": {
      "Daily": 700,
      "Hourly": 240,
      "Distance": 2.5
    }, 
    "SUV": {
      "Daily": 625,
      "Hourly": 200,
      "Distance": 2.25
    },
    "Limousine": {
      "Daily": 550,
      "Hourly": 160,
      "Distance": 2
    },
    "Trolley": {
      "Daily": 475,
      "Hourly": 120,
      "Distance": 1.75
    }
  }

  const [type, setType] = useState("Charter");
  const [count, setCount] = useState(0);
  const [method, setMethod] = useState("Daily");
  const [units, setUnits] = useState();
  const [show, setShow] = useState(false);
  const [finalPrice, setFinalPrice] = useState(0);

  function changeType (e) {
    setType(e.target.value);
  }

  function changeCount (e) {
    setCount(e.target.value);
  }

  function changeMethod (e) {
    setMethod(e.target.value);
  }

  function changeUnits (e) {
    setUnits(e.target.value);
  }
  
  function calculate(VehicleCount, VehicleType, PricingMethod, Units) {
    setShow(true);
    setFinalPrice(chart[VehicleType][PricingMethod] * VehicleCount * Units);
  }
  return (
    <div className="App">
      <h2>Auto Price Calculator</h2>
        <label>Select what type of vehicle you want:</label>
        <select name = "type" onChange = {changeType}>
          <option value = "Charter">Charter</option>
          <option value = "Mini Bus">Mini Bus</option>
          <option value = "Sprinter">Sprinter</option>
          <option value = "Party Bus">Party Bus</option>
          <option value = "Sedan">Sedan</option>
          <option value = "SUV">SUV</option>
          <option value = "Limousine">Limousine</option>
          <option value = "Trolley">Trolley</option>
        </select>
        <br/>
        <label>How many vehicles?</label>
        <input type = "text" name = "count" onChange = {changeCount} required></input>
        <br/>
        <label>Select your pricing method:</label>
        <select name = "method" onChange = {changeMethod}>
          <option value = "Daily">Daily</option>
          <option value = "Hourly">Hourly</option>
          <option value = "Distance">Distance</option>
        </select>
        <br/>
        <label>Please enter how long you will be renting for in {method == "Daily" ? "days" : ""}{method == "Hourly" ? "hours" : ""}{method == "Distance" ? "miles" : ""}</label>
        <input type = "text" name = "units" onChange = {changeUnits} required></input>
        <br/>
        <button onClick = {() => calculate(count, type, method, units)}>Get my price!</button>
        {
          show
          ? <div>
            <h3>Your final price is: ${finalPrice}</h3>
          </div>
          : <></>
        }
    </div>
  );
}

export default App;
