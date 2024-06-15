import "./style.css";

const Buttons = () => (
    <section className="buttons">
        <button
            className="buttons__button buttons__button--submit"
            type="submit"
        >
            Przelicz
        </button>
        <button
            className="buttons__button"
            type="reset">
            Wyczyść
        </button>
    </section>
);

export default Buttons;