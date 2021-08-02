export interface IAxiosFullError {
  message: string;
  error: IAxiosError;
};

export interface IAxiosError {
  message: string;
  status: number;
};
