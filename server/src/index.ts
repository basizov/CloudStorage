import express, { Application } from 'express';
import mongoose from 'mongoose';
import { ERouterLinks } from './domain/enums/ERouterLinks';
import enviromentConfig from './enviroment/config';
import errorMiddleware from './middleware/errorMiddleware';
import loggerMiddleware from './middleware/loggerMiddleware';
import router from './routes';

const applicaton: Application = express();
const PORT = enviromentConfig.SERVER_STARTING_PORT;

applicaton.use(express.json());
applicaton.use(ERouterLinks.BASE_ROUTE, router);
applicaton.use(loggerMiddleware);
applicaton.use(errorMiddleware);

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
