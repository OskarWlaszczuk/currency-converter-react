import { Container, Header, Content, CurrencyName } from "./styled";

export const Result = ({ result, status }) => {
    const { amount, code, value } = result
    return (
        <Container $hidden={status === "error" || status === "loading"}>
            <Header>Wynik:</Header>
            <Content $hidden={!amount}>
                {amount} zł = {(amount * value).toFixed(2)}<CurrencyName>{code}</CurrencyName>
            </Content>
        </Container>
    );
};