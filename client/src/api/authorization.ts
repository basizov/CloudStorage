import { IAuth } from "@/models/IAuth";
import { IAxiosFullError } from "@/models/IAxiosError";
import { AxiosError } from "axios";
import api from ".";

export const loginHandler = async (params: IAuth) => {
  try {
    const user = await api.Auth.login(params);

    return (user);
  } catch (e) {
    const error = e as AxiosError<IAxiosFullError>;

    if (error.response) {
      console.log(error.response?.data);
    } else console.log('Axios error');
  }
};

export const registerHandler = async (params: IAuth) => {
  try {
    const user = await api.Auth.register(params);

    return (user);
  } catch (e) {
    const error = e as AxiosError<IAxiosFullError>;

    if (error.response) {
      console.log(error.response?.data);
    } else console.log('Axios error');
  }
};
