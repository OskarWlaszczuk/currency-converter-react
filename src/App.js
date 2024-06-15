import Section from "./Section";
import Header from "./Header";
import Input from "./Input";
import Legend from "./Legend";
import Select from "./Select";
import Resualts from "./Resualts";
import Buttons from "./Buttons";
import Fieldset from "./Fieldset";
import Form from "./Form";

function App() {
  return (
    <Form
      children={
        <>
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
        </>
      }
    />
  );
};

export default App;
