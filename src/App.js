import Section from "./Section";
import Header from "./Header";
import Input from "./Input";
import Legend from "./Legend";
import Select from "./Select";
import Resualts from "./Resualts";
import Buttons from "./Buttons";

function App() {
  return (
    <form className="form">
      <fieldset className="form__fieldset">
        <Legend />
        <Section
          children={
            <>
              <Header title="Kwota w PLN" />
              <Input />
            </>
          }
        />
        <Section
          children={
            <>
              <Header title="Wybierz walutę" />
              <Select />
            </>
          }
        />
        <Resualts />
      </fieldset>
      <Buttons />
    </form>
  );
}

export default App;
