import { useEffect, useState } from "react";
import "./style.css";

const Clock = () => {
    const [clock, setClock] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setClock(new Date());
        });
        return () => clearInterval(intervalId);
    }, []);

    return (
        <p className="clock">
            <code>
                Dzisiaj jest {clock.toLocaleString("pl", { weekday: "long", day: "numeric", month: "long", year: "numeric" })} {clock.toLocaleTimeString("pl", { hours: "2-digit", minutes: "2-digit", seconds: "2-digit" })}
            </code>
        </p>
    );
};

export default Clock;