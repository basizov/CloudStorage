import { Response, Router, Request } from "express";
import { ERouterLinks } from "../domain/enums/ERouterLinks";

const router: Router = Router();

router.use(ERouterLinks.REGISTRATION_ROUTE, (req: Request, res: Response) => {

});

export default router;
