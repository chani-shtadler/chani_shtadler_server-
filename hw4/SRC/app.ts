import express from "express";
import gameRouter from "./Game/gameRouter";
import manageRouter from "./Manageer/manageRouter";
import { errorHandler } from "./middleWares/errorHandler";
import { AuthService } from "./Utils/Authentication";

const authService = new AuthService();
const app = express();

app.use("/number", gameRouter);

app.use("/manage", manageRouter);

app.use(errorHandler);

export default app;