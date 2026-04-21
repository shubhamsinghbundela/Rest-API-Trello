import express from "express";
import errorHandler from "./common/middleware/error.middleware.js";
import authRoute from "./modules/auth/auth.routes.js";
import orgRoute from "./modules/org/org.routes.js"

const app = express();
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/org", orgRoute)

app.use(errorHandler);

export default app;