import * as roleController from "../controllers/roleController";
import { Hono } from "hono";
import { authMiddleware } from "../middlewares/auth.js";

const roleRoute = new Hono();

roleRoute.use("*", authMiddleware);

roleRoute.get("/", roleController.getAllRoles);
roleRoute.post("/", roleController.createRole);
roleRoute.put("/:id", roleController.updateRole);
roleRoute.delete("/:id", roleController.deleteRole);

export default roleRoute;
