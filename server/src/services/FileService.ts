import ApplicationError from "../domain/models/ApplicationError";
import config from "../enviroment/config";
import fs from 'fs';
import { IFile } from "../domain/interfaces/IFile";

class FileService {
  createDirectory(file: IFile) {
    const filePath = `${config.FILE_PATH}\\${file.userId}\\${file.path}`;
    const isExists = fs.existsSync(filePath);

    if (!isExists) {
      fs.mkdirSync(filePath);
    } else throw ApplicationError.badRequest('This file is exists');
  }
};

export default new FileService();
