import { useState } from "react";
import "./style.css";

const Select = () => {
    const [currency, setCurrency] = useState("USD");

    const onSelectChange = ({ target }) => setCurrency(target.value);

    return (
        <select
            value={currency}
            name="currencyName"
            className="select"
            onChange={onSelectChange}
        >
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="CHF">CHF</option>
            <option value="EUR">EUR</option>
        </select>
    );
};

export default Select;