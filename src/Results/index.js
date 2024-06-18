import "./style.css";

const Results = ({ result }) => {
    return (
        <p
            className={`resualts ${!result ? 'resualts--hidden' : ''}`}
        >
            {
                result
            }
        </p>
    );
};

export default Results;