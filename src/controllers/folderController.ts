


// src/controllers/folderController.ts
import { Request, Response } from 'express';
import Folder from '../models/Folder';

export const getFolders = async (req: Request, res: Response) => {
    try {
        const folders = await Folder.find({});
        res.json(folders);
    } catch (error) {
        res.status(500).json({ error: 'Could not fetch folders' });
    }
};

export const createFolder = async (req: Request, res: Response) => {
    const { name } = req.body;

    try {
        const folder = new Folder({ name });
        await folder.save();
        res.status(201).json(folder);
    } catch (error) {
        res.status(500).json({ error: 'Could not create folder' });
    }
};

export const deleteFolder = async (req: Request, res: Response) => {
    const { id } = req.params;

    if (id === 'root') {
        return res.status(400).json({ error: 'The root folder cannot be deleted' });
    }

    try {
        const deletedFolder = await Folder.findByIdAndDelete(id);
        if (deletedFolder) {
            res.json({ message: 'Folder deleted successfully' });
        } else {
            res.status(404).json({ error: 'Folder not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Could not delete folder' });
    }
};
