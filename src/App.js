import Section from "./Section";
import Header from "./Header";
import Input from "./Input";
import Legend from "./Legend";
import Select from "./Select";
import Resualts from "./Resualts";

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
      <section className="buttons">
        <button className="buttons__button buttons__button--submit" type="submit">
          Przelicz
        </button>
        <button className="buttons__button" type="reset">
          Wyczyść
        </button>
      </section>
    </form>
  );
}

export default App;
