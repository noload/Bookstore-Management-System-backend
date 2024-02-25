import envObj from "dotenv";

envObj.config();

const configObj = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  JWT_KEY: process.env.JWT_KEY,
  SESSION_KEY: process.env.SESSION_KEY,
};

export const { PORT, DB_URL, JWT_KEY, SESSION_KEY } = configObj;
