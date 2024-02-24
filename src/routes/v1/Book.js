import { Router } from "express";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import { addBookController } from "../../controllers/bookControllers.js";
import { addBookValidation } from "../../middlewares/bookValidationMiddleware.js";

const router = Router();

//basic CURD operation endpoints

router.post("/books", authMiddleware, addBookValidation, addBookController);

export default router;
