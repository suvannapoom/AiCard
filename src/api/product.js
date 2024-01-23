import axios from "./axios";

export const productTrigger = (input) => axios.post("/trigger", input);
