import { model, Schema } from "mongoose";
import { EEntitiesModels } from "../enums/EEntitiesModels";
import { IFile } from "../interfaces/IFile";

const File = new Schema<IFile>({
  name: { type: String, required: true },
  type: { type: String, required: true },
  created: { type: Date, default: Date.now() },
  accessLink: { type: String },
  size: { type: Number, default: 0 },
  path: { type: String, default: '' },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  parentId: { type: Schema.Types.ObjectId, ref: 'File' },
  childs: [{ type: Schema.Types.ObjectId, ref: 'File' }]
});

export default model(EEntitiesModels.FILE_ENTITY, File);
