import express from "express";
import * as controller from "../controllers/counter.js";
const counterRouter = express.Router();

counterRouter.post("/set-target", controller.setTarget);

counterRouter.get('/get-counters/:user',controller.getCounters)

counterRouter.patch("/save-counter/:id", controller.saveCounter);

counterRouter.patch('/update-counter/:id', controller.updateCounter)

counterRouter.delete("/clearCounter/:id/:userId", controller.clearCounter);

export default counterRouter;
