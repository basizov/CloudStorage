import express, { Application, Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'
import enviromentConfig from './enviroment/config'

const applicaton: Application = express();
const PORT = enviromentConfig.SERVER_STARTING_PORT;

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path}`);
  next();
};

applicaton.use(express.json());
applicaton.use(loggerMiddleware);

const start = async () => {
  try {
    await mongoose.connect(enviromentConfig.MONGO_DB_CONNECTION, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });

    applicaton.listen(PORT, () => console.log(`Server started on ${PORT} port!`));
  } catch (e) {
    const error = e as Error;

    console.error(error);
  }
};

start();
