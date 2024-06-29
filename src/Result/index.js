import "./style.css";

const Result = ({ result }) => {
    const { amount, rate, shortcut } = result

    return (
        <p className="result">
            <header className="result__title">Wynik:</header>
            <span className={`result__result  
                ${!amount ? 'result__result--hidden' : ''}`}>
                {amount} zł = {(amount * rate).toFixed(2)}{shortcut}
            </span>
        </p>
    );
};

export default Result;