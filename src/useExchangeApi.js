import axios from "axios"
import { useEffect, useState } from "react";
export const useExchangeApi = () => {
    const [exchangeDatas, setExchangeDatas] = useState({});

    useEffect(() => {
        setTimeout(() => {
            (async () => {
                try {
                    const responseExchangeDatas = await axios.get("/exchange.json")

                    setExchangeDatas({
                        responseExchangeDatas,
                        currienciesDatas: responseExchangeDatas.data.data,
                        currenciesRatesDate:
                            new Date(responseExchangeDatas.data.meta.last_updated_at).toLocaleDateString(undefined, { day: "2-digit", month: "numeric", year: "numeric", }),
                        errorLog: "Sprawdź połączenie z internetem. Jeżeli problem, wciąż występuje to wina leży po naszej stronie! Przepraszamy i zachęcamy do spróbowania później.",
                        loadingLog: "Chwilę, ładuję stronę..."
                    })
                    //Lepsza obsługa błędów
                } catch (error) {
                    console.error(error)
                }
            })()
        }, 1000)

    }, []);

    const { currienciesDatas, currenciesRatesDate, errorLog, loadingLog, responseExchangeDatas } = exchangeDatas

    return { currienciesDatas, currenciesRatesDate, errorLog, loadingLog, responseExchangeDatas }
};