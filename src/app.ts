import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import folderRoutes from "./routes/folderRoutes";
import mongoose, { ConnectOptions } from "mongoose";


const app = express();

app.use(cors());
app.use(bodyParser.json());

// mongoose.connect("mongodb://localhost:27017/folder_tree", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     autoIndex: true,
// });

// process.env.DATABASE_URL || "http://localhost:8000"

mongoose.connect("mongodb+srv://folder_tree:folder_tree@cluster0.w0pu2sb.mongodb.net/folder_tree", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
} as ConnectOptions);


app.use("/api/folders", folderRoutes);

export default app;
