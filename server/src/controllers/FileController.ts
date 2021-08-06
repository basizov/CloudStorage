import { Response, Request, NextFunction } from "express";
import { IFile } from "../domain/interfaces/IFile";
import ApplicationError from "../domain/models/ApplicationError";
import File from "../domain/models/File";
import { IAuthRequest } from "../middleware/authMiddleware";
import FileService from "../services/FileService";

interface ICreateDirRequest extends IAuthRequest {
  body: IFile;
};

interface ISearchInDirRequest extends IAuthRequest<any, any, any, ISearchInDir> { };

export interface ICreateDirServiceParams {
  name: string;
  type: string;
  parentId: string;
};

export type ISearchInDir = {
  parentId: string;
};

class FileController {
  async createDirectory(req: Request, res: Response, next: NextFunction) {
    try {
      const request = req as ICreateDirRequest;
      const file: IFile = new File({
        name: request.body.name,
        type: request.body.type,
        parentId: request.body.parentId,
        userId: request.id
      });
      const parentFile: IFile = await File.findOne({ _id: request.body.parentId });

      if (!parentFile) {
        file.path = request.body.name;
        FileService.createDirectory(file);
      } else {
        file.path = `${parentFile.path}\\${file.name}`;
        FileService.createDirectory(file);
        parentFile.childs.push(file.id);
        await parentFile.save();
      }
      await file.save();
      res.json(file);
    } catch (e) {
      next(e as ApplicationError);
    }
  };

  async getFiles(req: Request, res: Response, next: NextFunction) {
    try {
      const request = req as ISearchInDirRequest;
      const files = await File.find({
        userId: request.id,
        parentId: request.query.parentId
      });

      res.json(files);
    } catch (e) {
      next(e as ApplicationError);
    }
  };
};

export default new FileController();
