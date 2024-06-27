import { useState } from "react";
import "./style.css";
import currencies from "../currencies";
import Clock from "../Clock";

const Form = ({ displayResult, setResult}) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("Euro");

    const resetForm = () => {
        setAmount("");
        setCurrency("Euro");
        setResult({});
    };

    const onSelectChange = ({ target }) => setCurrency(target.value);
    const onInputChange = ({ target }) => setAmount(target.value);
    const onFormSubmit = event => {
        event.preventDefault();

        const chosenCurrency = currencies.find(({ name }) => name === currency);
        const { rate, shortcut } = chosenCurrency

        displayResult(amount, rate, shortcut);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
                <section className="form__date">
                    {<Clock/>}
                </section>
                <section className="form__section">
                    <header className="form__header">Kwota w PLN</header>
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
                    <header className="form__header">Wybierz walutę</header>
                    <select onChange={onSelectChange} name="currencyName" className="form__select" value={currency}>
                        {
                            currencies.map(({ name, id }) => (
                                <option key={id} value={name}>
                                    {name}
                                </option>
                            ))
                        };
                    </select>
                </section>
                <section className="form__buttonContainer">
                    <button className="form__button form__button--submit" type="submit">Przelicz</button>
                    <button className="form__button" onClick={resetForm} type="reset">Wyczyść</button>
                </section>
            </fieldset>
        </form>
    );
};

export default Form;