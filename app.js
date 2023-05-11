import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db";

const app = express();
dotenv.config();

// middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

// connnect database
connectDB();

// connection
const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server is running port", PORT);
});
