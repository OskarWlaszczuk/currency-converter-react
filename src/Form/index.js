import { useState } from "react";
import { Fieldset, Legend, Section, Header, Input, Container, Button, SubmitButton } from "./styled";
import currencies from "../currencies";
import { Clock } from "./Clock";

const Form = ({ displayResult, setResult }) => {
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
            <Fieldset>
                <Legend>Kalkulator walut</Legend>
                {<Clock />}
                <Section>
                    <Header>Kwota w PLN</Header>
                    <Input
                        onChange={onInputChange}
                        value={amount}
                        required
                        type="number"
                        min="0.1"
                        max="9999"
                        name="plnAmount"
                        step="any"
                        placeholder="Wpisz kwotę w PLN"
                        autoFocus
                    />
                </Section>
                <Section>
                    <Header>Wybierz walutę</Header>
                    <Input as="select" onChange={onSelectChange} name="currencyName" value={currency}>
                        {
                            currencies.map(({ name, id }) => (
                                <option key={id} value={name}>
                                    {name}
                                </option>
                            ))
                        };
                    </Input>
                </Section>
                <Container>
                    <SubmitButton type="submit">Przelicz</SubmitButton>
                    <Button onClick={resetForm} type="reset">Wyczyść</Button>
                </Container>
            </Fieldset>
        </form>
    );
};

export default Form;