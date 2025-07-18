import { Hono } from "hono";
import * as categoryController from "../controllers/categoryController.js";

const categoryRoute = new Hono();

categoryRoute.get("/", categoryController.getAllCategories);

categoryRoute.post("/", categoryController.createCategory);

export default categoryRoute;
