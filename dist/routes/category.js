import { Hono } from "hono";
import * as categoryController from "../controllers/categoryController.js";
const categoryRoute = new Hono();
categoryRoute.get("/", categoryController.getAllCategories);
categoryRoute.post("/", categoryController.createCategory);
categoryRoute.put("/:id", categoryController.updateCategory);
categoryRoute.delete("/:id", categoryController.deleteCategory);
export default categoryRoute;
