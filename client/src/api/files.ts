import { IAxiosFullError } from "@/models/IAxiosError";
import { AxiosError } from "axios";
import api from ".";

export const getFilesHandler = async (currentDir: string | null) => {
  try {
    if (currentDir) {
      const params = new URLSearchParams();

      params.append('parentId', currentDir);
      const files = await api.File.getFiles(params);

      return (files);
    } else {
      const files = await api.File.getFiles();

      return (files);
    }
  } catch (e) {
    const error = e as AxiosError<IAxiosFullError>;

    if (error.response) {
      console.log(error.response.data);
    } else console.log('Axios error');
  }
};
