import { Router, type IRouter } from "express";
import healthRouter from "./health";
import serverRouter from "./server";

const router: IRouter = Router();

router.use(healthRouter);
router.use(serverRouter);

export default router;
