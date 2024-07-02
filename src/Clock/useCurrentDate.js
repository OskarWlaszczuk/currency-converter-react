import { useState, useEffect } from "react";

export const useCurrentData = () => {
    const [clock, setClock] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setClock(new Date());
        });

        return () => clearInterval(intervalId);
    }, []);

    const date =
        <>
            Dzisiaj jest {clock.toLocaleString("pl", { weekday: "long", day: "numeric", month: "long", year: "numeric" })} {clock.toLocaleTimeString("pl", { hours: "2-digit", minutes: "2-digit", seconds: "2-digit" })}
        </>

    return date;
};