import { Response, Request, NextFunction } from "express";
import { UploadedFile } from "express-fileupload";
import { IFile } from "../domain/interfaces/IFile";
import { IUser } from "../domain/interfaces/IUser";
import ApplicationError from "../domain/models/ApplicationError";
import File from "../domain/models/File";
import User from "../domain/models/User";
import envirometVariables from "../enviroment/config";
import { IAuthRequest } from "../middleware/authMiddleware";
import FileService from "../services/FileService";
import fs from 'fs';

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

  async uploadFile(req: Request, res: Response, next: NextFunction) {
    try {
      const request = req as ICreateDirRequest;

      if (req.files) {
        const file = req.files.file as UploadedFile;
        const parent: IFile = await File.findOne({
          userId: request.id,
          _id: request.body.parentId
        });
        const user: IUser = await User.findOne({ _id: request.id });

        if (user.usedSpace + file.size > user.diskSpace) {
          throw ApplicationError.badRequest('No spaced in the disk!');
        }
        user.usedSpace += file.size;
        let path: string = envirometVariables.FILE_PATH;

        if (parent) {
          path += `\\${user._id}\\${parent.path}\\${file.name}`;
        } else {
          path += `\\${user._id}\\${file.name}`;
        }
        if (fs.existsSync(path)) {
          throw ApplicationError.badRequest('The same file is existed!');
        }
        file.mv(path);
        const type = file.name.split('.').pop();
        const dbFile: IFile = new File({
          name: file.name,
          type: type,
          size: file.size,
          path: parent?.path,
          parentId: parent?._id,
          userId: user._id
        });

        await dbFile.save();
        await user.save();
        res.json(dbFile);
      }
    } catch (e) {
      next(e as ApplicationError);
    }
  }
};

export default new FileController();
