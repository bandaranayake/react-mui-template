import axios from "axios";
import { BASE_URL } from "../utils/constants/urls.js";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});