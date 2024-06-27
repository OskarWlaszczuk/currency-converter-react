import { useEffect, useState } from "react";
import "./style.css";

const Clock = () => {
    const [clock, setClock] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setClock(new Date());
            clearInterval(intervalId);
        });
    });
    return (
        <p className="clock">
            <code>
                Dzisiaj jest {clock.toLocaleString('pl', { weekday: 'long' })}, {clock.toLocaleString('pl', { day: 'numeric' })} {clock.toLocaleString('pl', { month: 'long' })} {clock.toLocaleString('pl', { year: 'numeric' })}, {clock.getHours() < 10 && (0)}{clock.getHours()}:
                {clock.getMinutes() < 10 && ('0')}{clock.getMinutes()}:
                {clock.getSeconds() < 10 && (0)}{clock.getSeconds()}
            </code>
        </p>
    );
};

export default Clock;