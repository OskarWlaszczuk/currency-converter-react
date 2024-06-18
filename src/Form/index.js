import { useState } from "react";
import "./style.css";
import currencies from "../currencies";

const Form = ({ displayResult }) => {
    const [amount, setAmount] = useState(10);
    const [currency, setCurrency] = useState("Funt brytyjski");

    const onSelectChange = ({ target }) => setCurrency(currency => currency = target.value);
    const onInputChange = ({ target }) => setAmount(amount => amount = target.value);

    const onFormSubmit = event => {
        event.preventDefault();
        displayResult(amount, currency);
    };
    return (
        <form
            onSubmit={onFormSubmit}
            className="form"
        >
            <fieldset className="form__fieldset">
                <legend className="form__legend">
                    kalkulator walut
                </legend>
                <section className="form__section">
                    <header className="form__header">
                        Kwota w PLN
                    </header>
                    <input
                        onChange={onInputChange}
                        value={amount}
                        className="form__field"
                        required
                        type="number"
                        min="0.1"
                        max="9999"
                        name="plnAmount"
                        step="any"
                        placeholder="Wpisz kwotę w PLN"
                        autoFocus
                    />
                </section>
                <section className="form__section">
                    <header className="form__header">
                        Wybierz walutę
                    </header>
                    <select
                        onChange={onSelectChange}
                        name="currencyName"
                        className="form__select"
                        value={currency}
                    >
                        {
                            currencies.map(({ name, id }) => (
                                <option key={id}>
                                    {name}
                                </option>
                            ))
                        };
                    </select>
                </section>
                <section className="form__buttonContainer">
                    <button
                        className="form__button form__button--submit" type="submit"
                    >
                        Przelicz
                    </button>
                    <button
                        className="form__button" type="reset"
                    >
                        Wyczyść
                    </button>
                </section>
            </fieldset>
        </form>
    );
};

export default Form;