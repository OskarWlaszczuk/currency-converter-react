import { Container, Header, Content } from "./styled";

const Result = ({ result }) => {
    const { amount, rate, shortcut } = result
    return (
        <Container>
            <Header>Wynik:</Header>
            <Content $hidden={!amount}>
                {amount} zł = {(amount * rate).toFixed(2)}{shortcut}
            </Content>
        </Container>
    );
};

export default Result;