import express from "express";
import cors from "cors";
import colors from "colors";
import morgan from "morgan";

//module imports
import appRouter from "./src/routes/index.js";
import connectDB from "./src/config/db.js";
import { PORT } from "./src/config/serverConfig.js";

const app = express();

//Database connection
connectDB();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//routers
app.use("/api", appRouter);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`.rainbow);
});
