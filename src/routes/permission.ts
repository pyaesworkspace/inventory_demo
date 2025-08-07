import * as permissionController from "../controllers/permissionController";
import { Hono } from "hono";
import { authMiddleware } from "../middlewares/auth.js";

const permissionRoute = new Hono();

permissionRoute.use("*", authMiddleware);

permissionRoute.get("/", permissionController.getAllPermissions);
permissionRoute.post("/", permissionController.createPermission);
permissionRoute.put("/:id", permissionController.updatePermission);
permissionRoute.delete("/:id", permissionController.deletePermission);

export default permissionRoute;
