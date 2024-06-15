import Section from "./Section";
import Header from "./Header";
import Input from "./Input";
import Legend from "./Legend";
import Select from "./Select";
import Resualts from "./Resualts";
import Buttons from "./Buttons";
import Fieldset from "./Fieldset";

function App() {
  return (
    <form className="form">
      <Fieldset
        children={
          <>
            <Legend />
            <Section
              children={
                <>
                  <Header title="Kwota w PLN" />
                  <Input />
                </>
              }
            />
            <Section
              children={
                <>
                  <Header title="Wybierz walutę" />
                  <Select />
                </>
              }
            />
            <Resualts />
          </>
        }
      />
      <Buttons />
    </form>
  );
}

export default App;
