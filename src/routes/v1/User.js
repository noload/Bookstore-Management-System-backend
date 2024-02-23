import { authMiddleware } from "../../middlewares/authMiddleware.js";
import { Router } from "express";
import {
  signinValidation,
  signupValidation,
} from "../../middlewares/userValidaionMiddleware.js";
import {
  getProfileController,
  signinController,
  signupController,
  updateProfileController,
} from "../../controllers/userController.js";

const router = Router();

router.post("/signup", signupValidation, signupController);
router.post("/signin", signinValidation, signinController);
router.get("/profile", authMiddleware, getProfileController);
router.put("/profile", authMiddleware, updateProfileController);

export default router;
