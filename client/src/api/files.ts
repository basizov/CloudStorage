import { IAxiosFullError } from "@/models/IAxiosError";
import { ICreateFile, IFile, IRequestFile } from "@/models/IFile";
import { AxiosError } from "axios";
import api from ".";

export const getFilesHandler = async (currentDir: string | null) => {
  try {
    if (currentDir) {
      const params = new URLSearchParams();

      params.append('parentId', currentDir);
      const filesEntities: IRequestFile[] = await api.File.getFiles(params);
      const files: IFile[] = filesEntities.map(x => ({
        id: x._id,
        ...x
      }));

      return (files);
    } else {
      const filesEntities = await api.File.getFiles();
      const files: IFile[] = filesEntities.map(x => ({
        id: x._id,
        ...x
      }));

      return (files);
    }
  } catch (e) {
    const error = e as AxiosError<IAxiosFullError>;

    if (error.response) {
      console.log(error.response.data);
    } else console.log('Axios error');
  }
};

export const createFileHandler = async (currentDir: string | null, name: string) => {
  try {
    const fileEntity: ICreateFile = {
      name: name,
      parentId: currentDir,
      type: 'dir'
    };
    const fileCreated: IRequestFile = await api.File.createDir(fileEntity);
    const file: IFile = { id: fileCreated._id, ...fileCreated }

    return (file);
  } catch (e) {
    const error = e as AxiosError<IAxiosFullError>;

    if (error.response) {
      console.log(error.response.data);
    } else console.log('Axios error');
  }
};

export const uploadFileHandler = async (currentDir: string | null, file: File) => {
  try {
    const formData = new FormData();

    formData.append('file', file);
    if (currentDir) {
      formData.append('parentId', currentDir);
    }
    const uploadedFile = await api.File.uploadFile(formData);
    const fileResult: IFile = { id: uploadedFile._id, ...uploadedFile }

    return (fileResult);
  } catch (e) {
    const error = e as AxiosError<IAxiosFullError>;

    if (error.response) {
      console.log(error.response.data);
    } else console.log('Axios error');
  }
};

