import { Router } from "express";
import * as carController from "../controllers/car";

const router = Router();

router.post("/", carController.create);

export default router;