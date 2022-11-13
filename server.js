import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import connectToMongoDB from "./config/connectToMongoDB.js";
import { fileRoutes, showRoutes, downloadRoutes } from "./routes/index.js";

const PORT = process.env.PORT || 5002;

const app = express();
app.use(express.static("public"));
app.use(express.json());
dotenv.config();
connectToMongoDB(); // Connect to Database

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
