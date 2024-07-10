import axios from "axios"

export const sendRequest = async url => await axios.get(url);