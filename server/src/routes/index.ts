import express from "express";
import { ERouterLinks } from "../domain/enums/ERouterLinks";
import authorizeRouter from './authorization';

const router = express.Router();

router.use(ERouterLinks.AUTHORIZE_ROUTE, authorizeRouter);

export default router;
