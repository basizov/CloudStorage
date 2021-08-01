export interface ILoginForm {
  email: string;
  password: string;
};

export interface ILogin {
  id: string;
  email: string;
  token: string;
  diskSpace: number;
  usedSpace: number;
  avatar: string;
};

export interface IRegister {
  email: string;
  password: string;
};
