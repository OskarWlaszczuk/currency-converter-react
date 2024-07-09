import { Container, Header, Content } from "./styled";

const Result = ({ result }) => {
    const { amount, code, value } = result
    return (
        <Container>
            <Header>Wynik:</Header>
            <Content $hidden={!amount}>
                {amount} zł = {(amount * value).toFixed(2)}{code}
            </Content>
        </Container>
    );
};

export default Result;