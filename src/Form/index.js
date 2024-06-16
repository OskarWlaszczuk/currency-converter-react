import "./style.css";

const Form = ({ children }) => {
    const onFormSubmit = event => {
        event.preventDefault();
    };

    return (
        <form
            onSubmit={onFormSubmit}
            className="form" >
            {children}
        </form >
    );
};

export default Form;