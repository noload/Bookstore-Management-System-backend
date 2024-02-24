import { Router } from "express";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import {
  addBookController,
  getBooksController,
} from "../../controllers/bookControllers.js";
import { addBookValidation } from "../../middlewares/bookValidationMiddleware.js";

const router = Router();

//basic CURD operation endpoints

router.post("/books", authMiddleware, addBookValidation, addBookController);
router.get("/books", authMiddleware, getBooksController);

export default router;
