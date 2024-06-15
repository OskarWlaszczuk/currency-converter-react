import "./style.css";

const Select = () => (
    <select name="currencyName" className="select">
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="CHF">CHF</option>
        <option value="EUR">EUR</option>
    </select>
);

export default Select;