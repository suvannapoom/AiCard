import axios from "./axios";

export const sendEmail = (input) => axios.post("/trigger", input);
