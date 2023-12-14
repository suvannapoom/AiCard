import axios from "./axios";

export const payment = (cardList) => axios.post("/stock", cardList);
