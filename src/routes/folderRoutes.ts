import { Router } from "express";
import FolderController from "../controllers/folderController";

const router = Router();
const folderController = new FolderController();

router.get("/", folderController.getFolders);
router.post("/", folderController.createFolder);
router.delete("/:id", folderController.deleteFolder);

export default router;
