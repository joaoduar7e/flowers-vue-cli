import axios from "axios";

const api = axios.create({
  baseURL: "https://api-flower.vercel.app/",
});

export default api;