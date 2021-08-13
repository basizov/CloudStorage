import { Router } from "express";
import FileController from "../controllers/FileController";
import { ERouterLinks } from "../domain/enums/ERouterLinks";
import authMiddleware from "../middleware/authMiddleware";

const router: Router = Router();

router.get('', authMiddleware, FileController.getFiles);
router.get(ERouterLinks.DOWNLOAD, authMiddleware, FileController.downloadFile);
router.post('', authMiddleware, FileController.createDirectory);
router.post(ERouterLinks.UPLOAD, authMiddleware, FileController.uploadFile);
router.delete(ERouterLinks.DELETE, authMiddleware, FileController.deleteFile);

export default router;
