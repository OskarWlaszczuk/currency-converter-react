import { useState } from "react";
import "./style.css";

const Input = () => {
    const [amountInPln, setAmountInPln] = useState(45);

    const onInputChange = ({ target }) => setAmountInPln(target.value);

    return (
        <input
            onChange={onInputChange}
            value={amountInPln}
            className="input"
            required
            type="number"
            min="0.1"
            max="9999"
            name="plnAmount"
            step="any"
            placeholder="Wpisz kwotę w PLN"
            autoFocus
        />
    );
};

export default Input;