import axios, { AxiosInstance } from "axios";
import config from "@/enviroment/config";
import interseptors from "./interseptors";

const instance: AxiosInstance = axios.create({
  baseURL: config.BASE_URL
});

interseptors(instance);

export default instance;
