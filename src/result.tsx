import { FC, useState } from "react";

interface ResultProps {
  number1: string;
  number2: string;
}

const Result: FC<ResultProps> = ({ number1, number2 }) => {
  const [result, setResult] = useState(0);

  const addNumbers = (val1: string, val2: string) => {
    let a = parseInt(val1);
    let b = parseInt(val2);
    setResult(a + b);
  };

  return (
    <div className="App">
      <button name="addNumbers" onClick={() => addNumbers(number1, number2)}>
        Result
      </button>
      <p>{result === 0 ? "The value is zero or none" : result}</p>
    </div>
  );
};

export default Result;
