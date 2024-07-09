import { useState } from "react";
import {Form} from "./Form";
import Result from "./Result";

function App() {
  const [result, setResult] = useState({});

  const displayResult = (amount, code, value) => {
    setResult(
      (result) =>
        (result = {
          amount,
          code,
          value,
        })
    );
  };

  return (
    <>
      <Form
        displayResult={displayResult}
        setResult={setResult}
      />
      <Result result={result} />
    </>
  );
}

export default App;
