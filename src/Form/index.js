import { useRef, useState } from "react";
import { Fieldset, Legend, Section, Header, Input, Container, Button, SubmitButton, Information } from "./styled";
import { Clock } from "./Clock";
import { useExchangeApi } from "../useExchangeApi";

export const Form = ({ displayResult, setResult }) => {
    const {
        currienciesDatas,
        currenciesRatesDate,
    } = useExchangeApi();

    const [currency, setCurrency] = useState("CHF");
    const [amount, setAmount] = useState("");
    const inputRef = useRef(null);
    //Przenieść logikę formularza do hooków 
    
    const resetForm = () => {
        setAmount("");
        setCurrency(currienciesDatas.CHF.code);
        setResult({});
    };

    const onSelectChange = ({ target }) => setCurrency(target.value);
    const onInputChange = ({ target }) => {
        setAmount(target.value);
    }
    const onFormSubmit = event => {
            event.preventDefault();

            inputRef.current.focus();

            const chosenCurrency = Object.values(currienciesDatas).find(({ code }) =>
                code === currency);
            const { code, value } = chosenCurrency

            displayResult(amount, code, value);
        };

        return (
            <form onSubmit={onFormSubmit}>
                <Fieldset>
                    {
                        !currienciesDatas ?
                            'Chwilę ładuję stronę' :
                            <>
                                <Legend>Kalkulator walut</Legend>
                                {<Clock />}
                                <Section>
                                    <Header>Kwota w PLN</Header>
                                    <Input
                                        type="number"
                                        ref={inputRef}
                                        onChange={onInputChange}
                                        value={amount}
                                        required
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
                                    <Input
                                        as="select"
                                        onChange={onSelectChange}
                                        name="currencyName"
                                        value={currency}>
                                        {
                                            //zmienna globalna z tablicą nazw walut
                                            Object.keys(currienciesDatas).map((currencyName) => (
                                                <option
                                                    key={currencyName}
                                                    value={currencyName}
                                                >
                                                    {currencyName}
                                                </option>
                                            ))
                                        };
                                    </Input>
                                </Section>
                                <Container>
                                    <SubmitButton type="submit">Przelicz</SubmitButton>
                                    <Button onClick={resetForm} type="reset">Wyczyść</Button>
                                </Container>
                                <Information>
                                    Kursy walut pobierane są z ofizjalnych instytucji finansowych.<br />
                                    Aktualne na dzień:{currenciesRatesDate}
                                </Information>
                            </>}
                </Fieldset>
            </form>
        );
    };