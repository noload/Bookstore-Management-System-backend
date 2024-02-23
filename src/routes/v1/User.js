import { Router } from "express";
import { signupValidation } from "../../middlewares/userValidaionMiddleware.js";
import { signupController } from "../../controllers/userController.js";

const router = Router();

router.post("/signup", signupValidation, signupController);
export default router;
