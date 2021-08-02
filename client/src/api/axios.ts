import axios, { AxiosInstance } from "axios";
import config from "@/enviroment/config";

const instance: AxiosInstance = axios.create({
  baseURL: config.BASE_URL
});

export default instance;
