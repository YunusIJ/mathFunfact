import express from "express";
import { numberHandler } from "./mathhandler/mathHandler.js";

const router = express.Router();

// Number properties endpoint
router.get("/:num", numberHandler);

export default router;