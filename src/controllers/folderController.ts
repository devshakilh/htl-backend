import { Request, Response } from "express";
import Folder, { IFolder } from "../models/Folder";

class FolderController {

    public async getFolders(req: Request, res: Response): Promise<void> {
        try {
            const folders: IFolder[] = await Folder.find();
            res.json(folders);
        } catch (err) {
            res.status(500).send(err);
        }
    }

    public async createFolder(req: Request, res: Response): Promise<void> {
        const { name, parent } = req.body;

        const folder = new Folder({
            name,
            parent,
        });

        try {
            const savedFolder = await folder.save();
            res.json(savedFolder);
        } catch (err) {
            res.status(400).send(err);
        }


    }

    public async deleteFolder(req: Request, res: Response): Promise<void> {
        const folderId = req.params.id;

        if (!folderId) {
            res.status(400).json({ message: "Folder ID is required." });
            return;
        }

        if (folderId === "root") {
            res.status(400).json({ message: "Cannot delete the root folder." });
            return;
        }

        try {
            await Folder.findByIdAndDelete(folderId);
            res.json({ message: "Folder deleted successfully." });
        } catch (err) {
            res.status(500).send(err);
        }
    }
}

export default FolderController;
