import { Container, Paragraph } from "./styled";
import { useCurrentData } from "./useCurrentDate";

export const Clock = () => {
    const date = useCurrentData()
    return (
        <Container>
            <Paragraph>
                Dzisiaj jest {date.toLocaleString("pl", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
                {date.toLocaleTimeString("pl", { hours: "2-digit", minutes: "2-digit", seconds: "2-digit" })}
            </Paragraph>
        </Container>
    );
};