import { useState } from "react";
import { Form } from "./Form";
import { Result } from "./Result";
import { useExchangeApi } from "./useExchangeApi";

function App() {
  const [result, setResult] = useState({});


  const {
    currienciesDatas,
    currenciesRatesDate,
    status,
  } = useExchangeApi();

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
        currienciesDatas={currienciesDatas}
        currenciesRatesDate={currenciesRatesDate}
        status={status}
      />
      <Result result={result} status={status} />
    </>
  );
}

export default App;
