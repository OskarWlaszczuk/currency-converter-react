import { useState, useEffect } from "react";

export const useCurrentData = () => {
    const [date, setClock] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setClock(new Date());
        });

        return () => clearInterval(intervalId);
    }, []);

    return date;
};