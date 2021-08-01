import express from "express";
import { ERouterLinks } from "../domain/enums/ERouterLinks";
import authorizeRouter from './authorization';

const router = express.Router();

router.use(ERouterLinks.AUTHORIZE_ROUTE, authorizeRouter);
router.post('/hello', (req, res) => res.json('Hello'));

export default router;
