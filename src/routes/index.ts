import { Router } from "express";
import user from "./user";
import procurador from "./procurador";
import procuradoria from "./procuradoria";
import parecer from "./parecer";
import { UserController } from "../controller";

const router = Router();

router.post("/login", UserController.loginUser);
router.use("/user", user);
router.use("/parecer", parecer);
router.use("/procurador", procurador);
router.use("/procuradoria", procuradoria);

export default router;
