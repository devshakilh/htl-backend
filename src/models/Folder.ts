// import mongoose, { Schema, Document } from "mongoose";

// export interface IFolder extends Document {

//     name: string;
//     parent: string | null;
// }

// const folderSchema: Schema = new Schema({
//     name: { type: String, required: true },
//     parent: { type: String, default: null },
// });

// export default mongoose.model<IFolder>("Folder", folderSchema);




// src/models/Folder.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IFolder extends Document {
    name: string;
    subfolders: IFolder[];
}

const folderSchema = new Schema<IFolder>({
    name: { type: String, required: true },
    subfolders: [{ type: Schema.Types.ObjectId, ref: 'Folder' }],
});

const Folder = mongoose.model<IFolder>('Folder', folderSchema);

export default Folder;
