import Section from "./Section";
import Header from "./Header";
import Input from "./Input";
import Legend from "./Legend";

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
        <section className="section">
          <header className="section__header">
            Wybierz walutę
          </header>
          <select name="currencyName" className="section__select">
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="CHF">CHF</option>
            <option value="EUR">EUR</option>
          </select>
        </section>
        <p className="resualts "></p>
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
