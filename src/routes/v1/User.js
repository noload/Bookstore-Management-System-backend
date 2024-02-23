import { Router } from "express";
import {
  signinValidation,
  signupValidation,
} from "../../middlewares/userValidaionMiddleware.js";
import {
  signinController,
  signupController,
} from "../../controllers/userController.js";

const router = Router();

router.post("/signup", signupValidation, signupController);
router.post("/signin", signinValidation, signinController);
export default router;
