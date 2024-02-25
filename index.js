import express from "express";
import cors from "cors";
import colors from "colors";
import morgan from "morgan";

//module imports
import appRouter from "./src/routes/index.js";
import connectDB from "./src/config/db.js";
import { PORT, SESSION_KEY } from "./src/config/serverConfig.js";
import session from "express-session";
const app = express();

//Database connection
connectDB();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//basic session configuration
const store = new session.MemoryStore(); // It is default store
app.use(
  session({
    secret: SESSION_KEY,
    cookie: { maxAge: 1000 * 60 * 60 * 24, secure: true, sameSite: "none" },
    resave: false,
    saveUninitialized: false,
    store,
  })
);
//routers
app.use("/api", appRouter);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`.rainbow);
});
