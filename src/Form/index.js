import { useRef, useState } from "react";
import { Fieldset } from "./styled";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { Content } from "./Content";

export const Form = (
    {
        displayResult,
        setResult,
        currienciesDatas,
        currenciesRatesDate,
        status
    }) => {

    const [currency, setCurrency] = useState("CHF");
    const [amount, setAmount] = useState("");

    const inputRef = useRef(null);


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
                    status === "succes" ?
                        <Content
                            setResult={setResult}
                            inputRef={inputRef}
                            currenciesRatesDate={currenciesRatesDate}
                            currienciesDatas={currienciesDatas}
                            amount={amount}
                            setAmount={setAmount}
                            currency={currency}
                            setCurrency={setCurrency}
                        /> :
                        (status === "loading" ?
                            <Loading /> :
                            <Error />
                        )
                }
            </Fieldset>
        </form>
    );
};