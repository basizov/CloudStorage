import express from "express";
import { ERouterLinks } from "../domain/enums/ERouterLinks";
import authorizeRouter from './authorization';
import fileRouter from './file';

const router = express.Router();

router.use(ERouterLinks.AUTHORIZE_ROUTE, authorizeRouter);
router.use(ERouterLinks.FILE_ROUTE, fileRouter);

export default router;
