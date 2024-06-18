import { useState } from "react";
import Form from "./Form";
import Resualts from "./Resualts";

function App() {
  const [resualt, setResualt] = useState();

  const currencies = [
    { name: "Dolar amerykański", id: "$", rate: 0.24, shortcut: "$" },
    { name: "Euro", id: "€", rate: 0.20, shortcut: "€" },
    { name: "Funt brytyjski", id: "£", rate: 0.22, shortcut: "£" },
    { name: "Frank szwajcarski", id: "CHF", rate: 0.23, shortcut: "CHF" },
  ];

  const displayResualt = (amount, currency) => {
    const chosenCurrency = currencies.find(({ name }) => name === currency);
    chosenCurrency && (
      setResualt(resualt => resualt =
        <>
          {amount}zł = {(chosenCurrency.rate * amount).toFixed(2)}{chosenCurrency.shortcut}
        </>
      )
    );
  };

  return (
    <>
      <Form displayResualt={displayResualt} />
      <Resualts resualt={resualt} />
    </>
  );
};

export default App;
