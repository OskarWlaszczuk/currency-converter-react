import { useState } from "react";
import Form from "./Form";
import Result from "./Result";
import { ThemeProvider } from "styled-components";

const theme = {
  breakPoints: {
    tabletHorizontal: 770
  }
};

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
    <ThemeProvider theme={theme}>
      <Form displayResult={displayResult} setResult={setResult} result={result} />
      <Result result={result} />
    </ThemeProvider>
  );
};

export default App;