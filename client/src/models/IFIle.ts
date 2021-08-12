export interface IRequestFile {
  _id: string;
  name: string;
  type: string;
  created: Date;
  path: string;
  accessLink: string;
  size: number;
};

export interface IFile {
  id: string;
  name: string;
  type: string;
  created: Date;
  path: string;
  accessLink: string;
  size: number;
};

export interface ICreateFile {
  name: string;
  parentId: string | null;
  type: string;
}
