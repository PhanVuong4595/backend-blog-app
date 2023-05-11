import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db";
import {
  errorResponserHandler,
  invalidPathHandler,
} from "./middleware/errorHandler";

const app = express();
dotenv.config();

// middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// connnect database
connectDB();

// static assets
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(invalidPathHandler);
app.use(errorResponserHandler);

// connection
const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is running port", PORT);
});
