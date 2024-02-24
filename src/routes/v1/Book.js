import { Router } from "express";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import { addBookController } from "../../controllers/bookControllers.js";

const router = Router();

//basic CURD operation endpoints

router.post("/books", authMiddleware, addBookController);

export default router;
