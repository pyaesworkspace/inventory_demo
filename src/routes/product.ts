import { Hono } from "hono";
import * as productController from "../controllers/productController.js";
import { authMiddleware } from "../middlewares/auth.js";

const productRoute = new Hono();

productRoute.use("*", authMiddleware);

productRoute.get("/", productController.getAllProducts);

productRoute.post("/", productController.createProduct);

productRoute.put("/:id", productController.updateProduct);

productRoute.delete("/:id", productController.deleteProduct);

export default productRoute;
