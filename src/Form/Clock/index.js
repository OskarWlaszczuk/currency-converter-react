import { Container, Paragraph } from "./styled";
import { useCurrentData } from "./useCurrentDate";

export const Clock = () => {
    const date = useCurrentData()
    return (
        <Container>
            <Paragraph>
                {date}
            </Paragraph>
        </Container>
    );
};