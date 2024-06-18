import { useState } from "react";
import Form from "./Form";
import Results from "./Results";

function App() {
  const [result, setResult] = useState();

  const currencies = [
    { name: "Dolar amerykański", id: "$", rate: 0.24, shortcut: "$" },
    { name: "Euro", id: "€", rate: 0.20, shortcut: "€" },
    { name: "Funt brytyjski", id: "£", rate: 0.22, shortcut: "£" },
    { name: "Frank szwajcarski", id: "CHF", rate: 0.23, shortcut: "CHF" },
  ];

  const displayResult = (amount, currency) => {
    const chosenCurrency = currencies.find(({ name }) => name === currency);
    chosenCurrency && (
      setResult(result => result =
        <>
          {amount}zł = <strong className="results__result">{(chosenCurrency.rate * amount).toFixed(2)}{chosenCurrency.shortcut}</strong>
        </>
      )
    );
  };

  return (
    <>
      <Form displayResult={displayResult} />
      <Results result={result} />
    </>
  );
};

export default App;
