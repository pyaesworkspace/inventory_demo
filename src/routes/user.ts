import * as userController from "../controllers/userController.js";
import { Hono } from "hono";
import { authMiddleware } from "../middlewares/auth.js";

const userRoute = new Hono();

userRoute.use("*", authMiddleware);
userRoute.get("/", userController.getAllUsers);
userRoute.post("/", userController.createUser);
userRoute.put("/:id", userController.updateUser);
userRoute.delete("/:id", userController.deleteUser);

export default userRoute;
