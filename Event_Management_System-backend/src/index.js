import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
import eventController from "./controllers/EventController.js";
import nontecheventContoller from "./controllers/NonTechnicalEvent.js";
import coursecontroller from "./controllers/CourseController.js";
import loginAuth from "./controllers/AuthController.js";
import RegisterAuth from "./controllers/AuthController.js";
import UserFile from "./controllers/AuthController.js";
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use("/event", eventController);
app.use("/nonTechnicalEvent", nontecheventContoller);
app.use("/course", coursecontroller);
app.use("/", loginAuth);
app.use("/", RegisterAuth);
app.use("/user", UserFile);

const connection = process.env.DB;
const PORT = process.env.PORT || 9000;

mongoose
  .connect(connection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
