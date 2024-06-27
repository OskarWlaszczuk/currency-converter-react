import { useEffect, useState } from "react";
import "./style.css";
import currencies from "../currencies";

const Form = ({ displayResult, setResult }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("Euro");
    const [clock, setClock] = useState(<></>);

    const currentDate = new Date();

    const currentWeekDay = currentDate.toLocaleString('pl', { weekday: 'long' });
    const currentMonth = currentDate.toLocaleString('pl', { month: 'long' });
    const currentDay = currentDate.toLocaleString('pl', { day: 'numeric' });
    const currentYear = currentDate.toLocaleString('pl', { year: 'numeric' });

    const currentHour = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();

    const isGreaterThan10 = time => time < 10 && (0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setClock(
                <>
                    Dzisiaj jest {currentWeekDay}, {currentDay} {currentMonth} {currentYear},
                    {isGreaterThan10(currentHour)}{currentHour}:
                    {isGreaterThan10(currentMinutes)}{currentMinutes}:
                    {isGreaterThan10(currentSeconds)}{currentSeconds}
                </>
            );
            clearInterval(intervalId);
        });
    });

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
                    <code>
                        {clock}
                    </code>
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