import { Router } from "express";
import { ERouterLinks } from "../domain/enums/ERouterLinks";

const router: Router = Router();

router.use(ERouterLinks.AUTHORIZE_ROUTE,);

export default router;
