import { useState } from "react";
import Form from "./Form";
import Results from "./Results";
import currencies from "./currencies";

function App() {
  const [result, setResult] = useState();

  const displayResult = (amount, currency) => {
    const chosenCurrency = currencies.find(({ name }) => name === currency);

    chosenCurrency && amount && (
      setResult(result => result =
        <>
          {amount}zł = <strong className="results__result">{(chosenCurrency.rate * amount).toFixed(2)}{chosenCurrency.shortcut}</strong>
        </>
      )
    );
  };
  return (
    <>
      <Form displayResult={displayResult} setResult={setResult} result={result} />
      <Results result={result} />
    </>
  );
};

export default App;