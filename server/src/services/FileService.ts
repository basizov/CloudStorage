import ApplicationError from "../domain/models/ApplicationError";
import config from "../enviroment/config";
import fs from 'fs';
import { IFile } from "../domain/interfaces/IFile";

class FileService {
  createDirectory(file: IFile) {
    const filePath = this.getPath(file);
    const isExists = fs.existsSync(filePath);

    if (!isExists) {
      fs.mkdirSync(filePath);
    } else throw ApplicationError.badRequest('This file is exists');
  };

  deleteFile(file: IFile) {
    const filePath = this.getPath(file);

    if (file.type === 'dir') {
      fs.rmdirSync(filePath);
    } else {
      fs.unlinkSync(filePath);
    }
  };

  private getPath(file: IFile) {
    return (`${config.FILE_PATH}\\${file.userId}\\${file.path}`);
  }
};

export default new FileService();
