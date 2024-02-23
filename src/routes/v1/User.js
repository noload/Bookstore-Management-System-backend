import { Router } from "express";
import {
  signinValidation,
  signupValidation,
} from "../../middlewares/userValidaionMiddleware.js";
import {
  getProfileController,
  signinController,
  signupController,
} from "../../controllers/userController.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";

const router = Router();

router.post("/signup", signupValidation, signupController);
router.post("/signin", signinValidation, signinController);
router.get("/profile", authMiddleware, getProfileController);

export default router;
