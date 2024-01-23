import axios from "./axios";

export const sendEmail = (input) => axios.post("/email", input);
