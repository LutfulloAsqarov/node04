import express from "express";
import cors from "cors";
import Blog from "./routers/blog.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDB is connected"))
    .catch(() => console.log("MongoDB is not connected"));

app.get("/", (req, res) => {
    res.json("Server is running");
});

// endpoints

app.use("/blog", Blog);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`${8000} port is listening`));
