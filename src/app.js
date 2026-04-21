import express from "express";
import authRoute from "./modules/auth/auth.routes.js";
import errorHandler from "./common/middleware/error.middleware.js";

const app = express();
app.use(express.json());

app.use("/api/auth", authRoute);

app.use(errorHandler);

export default app;