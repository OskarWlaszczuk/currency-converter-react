import { useEffect, useState } from "react";
import { sendRequest } from "./sendRequest";

export const useExchangeApi = () => {
    const [exchangeDatas, setExchangeDatas] = useState({});
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            (async () => {
                try {
                    const responseExchangeDatas = await sendRequest("https://api.currencyapi.com/v3/historical?apikey=cur_live_wmK26OmF9Q3kRY6A3zGXQWf1vylIpEhxz04T0TD3&currencies=EUR%2CUSD%2CCHF%2CGBP&base_currency=PLN&date=2024-07-07")

                    if (responseExchangeDatas.status !== 200) {
                        throw new Error();
                    }

                    setExchangeDatas({
                        currienciesDatas: responseExchangeDatas.data.data,
                        currenciesRatesDate:
                            new Date(responseExchangeDatas.data.meta.last_updated_at).toLocaleDateString(undefined, { day: "2-digit", month: "numeric", year: "numeric", }),
                    });
                    setStatus("succes");
                } catch {
                    setStatus("error");
                };
            })();
        }, 1000)

        return () => clearTimeout(timeoutId);
    }, []);

    const { currienciesDatas, currenciesRatesDate } = exchangeDatas

    return { currienciesDatas, currenciesRatesDate, status }
};