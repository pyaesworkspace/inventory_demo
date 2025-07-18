import { Hono } from "hono";
import * as productController from "../controllers/productController.js";
const productRoute = new Hono();
productRoute.get("/", productController.getAllProducts);
productRoute.post("/", productController.createProduct);
export default productRoute;
