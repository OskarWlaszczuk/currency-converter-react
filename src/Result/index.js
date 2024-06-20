import "./style.css";

const Result = ({ result }) => {
    const { amount, rate, shortcut } = result

    return (
        <p className={`result ${!amount && !rate && !shortcut ? 'result--hidden' : ''}`}>
            {amount} zł = {(amount * rate).toFixed(2)}{shortcut}
        </p>
    );
};

export default Result;