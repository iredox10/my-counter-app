import { resolve } from "bun";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import counterRouter from "./routes/counter.js";
import router from "./routes/user.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
try {
  mongoose.connect("mongodb://localhost/my-counter");
  console.log("connect to mongodb");
} catch (err) {
  console.log(err);
}

app.get("/", (req, res) => res.json("hello world"));

app.use("/user", router);
app.use("/counter", counterRouter);

app.listen(3000, () => console.log("connect to backend"));
