import { Container, Paragraph } from "./styled";
import { useCurrentData } from "./useCurrentDate";

const Clock = () => {
    const date = useCurrentData()
    return (
        <Container>
            <Paragraph>
                {date}
            </Paragraph>
        </Container>
    );
};

export default Clock;