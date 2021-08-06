import { Router } from "express";
import FileController from "../controllers/FileController";
import authMiddleware from "../middleware/authMiddleware";

const router: Router = Router();

router.get('', authMiddleware, FileController.getFiles);
router.post('', authMiddleware, FileController.createDirectory);

export default router;
