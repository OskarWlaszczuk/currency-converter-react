import "./style.css";

const Input = () => (
    <input
        className="input"
        required
        type="number"
        value="45"
        min="0.1"
        max="9999"
        name="plnAmount"
        step="any"
        placeholder="Wpisz kwotę w PLN"
        autofocus
    />
);

export default Input;