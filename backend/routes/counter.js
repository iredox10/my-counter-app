import express from "express";
import * as controller from "../controllers/counter.js";
const counterRouter = express.Router();

counterRouter.post("/setCounter/:id", controller.setCounter);

counterRouter.patch("/saveCounter/:id", controller.saveCounter);

counterRouter.delete("/clearCounter/:id/:userId", controller.clearCounter);



export default counterRouter;
