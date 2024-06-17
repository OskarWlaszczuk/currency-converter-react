import { useState } from "react";
import "./style.css";

const Form = () => {
    const [amount, setAmount] = useState(45);
    const [currency, setCurrency] = useState("GBP");

    const onSelectChange = ({ target }) => setCurrency(currency => currency = target.value);
    const onInputChange = ({ target }) => setAmount(amount => amount = target.value);

    const onFormSubmit = event => {
        event.preventDefault();
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
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                        <option value="CHF">CHF</option>
                        <option value="EUR">EUR</option>
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