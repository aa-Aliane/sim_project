import axios from "axios";

export const api = axios.create({
  baseURL: "http://10.0.99.251:8001/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const data_api = axios.create({
  baseURL: "http://10.0.99.251:8001/api/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
