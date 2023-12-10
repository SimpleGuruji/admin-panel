import express from "express";
import cors from "cors";
const app = express();

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    Credential: true,
  })
);

import userRouter from "./routes/user.routes.js";
app.use("/api/v1/users", userRouter);

export { app };
