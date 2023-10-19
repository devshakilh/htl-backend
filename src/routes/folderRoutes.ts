// src/routes/folderRoutes.ts
import express from 'express';
import {
  getFolders,
  createFolder,
  deleteFolder,
} from '../controllers/folderController';

const router = express.Router();

router.get('/', getFolders);
router.post('/', createFolder);
router.delete('/:id', deleteFolder);

export default router;
