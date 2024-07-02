import { useEffect, useState } from "react";
import { Container, Paragraph } from "./styled";

const Clock = () => {
    const [clock, setClock] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setClock(new Date());
        });
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Container>
            <Paragraph>
                Dzisiaj jest {clock.toLocaleString("pl", { weekday: "long", day: "numeric", month: "long", year: "numeric" })} {clock.toLocaleTimeString("pl", { hours: "2-digit", minutes: "2-digit", seconds: "2-digit" })}
            </Paragraph>
        </Container>
    );
};

export default Clock;