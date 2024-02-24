import { Router } from "express";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import {
  addBookController,
  getBookController,
  getBooksController,
} from "../../controllers/bookControllers.js";
import { addBookValidation } from "../../middlewares/bookValidationMiddleware.js";

const router = Router();

//basic CURD operation endpoints
router.post("/books", authMiddleware, addBookValidation, addBookController);
router.get("/books", authMiddleware, getBooksController);
router.get("/books/:bookId", authMiddleware, getBookController);

export default router;
