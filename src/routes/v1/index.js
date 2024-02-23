import { Router } from "express";
import bookRoute from "./Book.js";
import userRoute from "./User.js";
const router = Router();

router.use("/book", bookRoute);
router.use("/user", userRoute);
export default router;
