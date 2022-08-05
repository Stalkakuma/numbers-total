import React, { useState } from "react";
import Result from "./result";
import "./App.css";

const App = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");

  const handleNumberOne = (e: React.FormEvent<HTMLInputElement>): void => {
    setNumber1((e.target as HTMLInputElement).value);
  };
  const handleNumberTwo = (e: React.FormEvent<HTMLInputElement>): void => {
    setNumber2((e.target as HTMLInputElement).value);
  };

  return (
    <div className="App">
      <h2>Total of two numbers:</h2>
      <input
        onChange={(e) => handleNumberOne(e)}
        value={number1 ? number1 : ""}
        type="number"
        name="firstNumber"
      />
      <input
        onChange={(e) => handleNumberTwo(e)}
        value={number2 ? number2 : ""}
        type="number"
        name="secondNumber"
      />
      <Result
        number1={number1 ? number1 : ""}
        number2={number2 ? number2 : ""}
      />
    </div>
  );
};

export default App;
