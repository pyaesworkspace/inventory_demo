import * as roleController from "../controllers/roleController";
import { Hono } from "hono";
import { authMiddleware } from "../middlewares/auth.js";
const roleRoute = new Hono();
roleRoute.get("/roles", authMiddleware, roleController.getAllRoles);
roleRoute.post("/roles", authMiddleware, roleController.createRole);
roleRoute.put("/roles/:id", authMiddleware, roleController.updateRole);
roleRoute.delete("/roles/:id", authMiddleware, roleController.deleteRole);
export default roleRoute;
