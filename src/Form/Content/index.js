import { Legend, Section, Header, Input, Container, Button, SubmitButton, Information, ExchangeDate } from "./styled";
import { Clock } from "../Clock";

export const Content = (
    {
        setResult,
        inputRef,
        currenciesRatesDate,
        currienciesDatas,
        amount,
        setAmount,
        currency,
        setCurrency
    }) => {

    //Przenieść logikę formularza do hooków 

    const resetForm = () => {
        setAmount("");
        setCurrency(currienciesDatas.CHF.code);
        setResult({});
        setTimeout(() => inputRef.current.focus(), 0)
    };

    const onSelectChange = ({ target }) => setCurrency(target.value);
    const onInputChange = ({ target }) => setAmount(target.value);

    return (
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
                Kursy walut pobierane są z oficjalnych instytucji finansowych.<br />
                Aktualne na dzień: <ExchangeDate>{currenciesRatesDate}</ExchangeDate>.
            </Information>
        </>)
}