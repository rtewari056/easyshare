import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cron from "node-cron";
import cors from "cors";

import connectToMongoDB from "./config/connectToMongoDB.js";
import { fileRoutes, showRoutes, downloadRoutes } from "./routes/index.js";
import cronScript from "./config/cronScript.js";

const PORT = process.env.PORT || 5002;

const app = express();
app.use(express.static("public"));
app.use(express.json());
dotenv.config();
connectToMongoDB(); // Connect to Database

// CORS
const corsOptions = {
  origin: process.env.ALLOWED_CLIENTS.split(",")
}
app.use(cors(corsOptions));

// CRON Job to remove files from upload folder and data from database everyday at midnight 
cron.schedule("0 0 * * *", () => {
  cronScript();
});

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // The __dirname or __filename global variables are not available in ECMAScript module files.

// Template engine
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// Routes
app.use("/api/files", fileRoutes);
app.use("/files", showRoutes);
app.use("/files/download", downloadRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
