import { useState } from "react";
import Form from "./Form";
import Result from "./Result";

function App() {
  const [result, setResult] = useState({});

  const displayResult = (amount, rate, shortcut) => {
    setResult(result => result =
    {
      amount,
      rate,
      shortcut,
    });
  };

  return (
    <>
      <Form displayResult={displayResult} setResult={setResult} result={result} />
      <Result result={result} />
    </>
  );
};

export default App;