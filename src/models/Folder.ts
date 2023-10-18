import mongoose, { Schema, Document } from "mongoose";

export interface IFolder extends Document {

    name: string;
    parent: string | null;
}

const folderSchema: Schema = new Schema({
    name: { type: String, required: true },
    parent: { type: String, default: null },
});

export default mongoose.model<IFolder>("Folder", folderSchema);
