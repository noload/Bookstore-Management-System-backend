import { Router } from "express";
import { authMiddleware } from "../../middlewares/authMiddleware.js";
import {
  addBookController,
  addBookReview,
  deleteBookController,
  getBookController,
  getBooksController,
  updateBookController,
} from "../../controllers/bookControllers.js";
import { addBookValidation } from "../../middlewares/bookValidationMiddleware.js";
import { authSession } from "../../middlewares/authSessionMiddleware.js";

const router = Router();

//basic CURD operation endpoints
router.post("/books", authMiddleware, addBookValidation, addBookController);
router.get("/books", authMiddleware, getBooksController);
router.get("/books/:bookId", authMiddleware, getBookController);
router.put("/books/:bookId", authMiddleware, updateBookController);
router.delete("/books/:bookId", authMiddleware, deleteBookController);

//advance api endpoint
router.post("/books/:bookId/reviews", authMiddleware, addBookReview);

export default router;
