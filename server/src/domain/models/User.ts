import { Schema, model } from "mongoose";
import { EEntitiesModels } from "../enums/EEntitiesModels";
import { IUser } from "../interfaces/IUser";

const User = new Schema<IUser>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  diskSpace: { type: Number, default: 1024 ** 3 * 10 },
  usedSpace: { type: Number, default: 0 },
  avatar: { type: String },
  files: [{ type: Schema.Types.ObjectId, ref: 'File' }]
});

export default model(EEntitiesModels.USER_ENTITY, User);
