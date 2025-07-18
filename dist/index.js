import { serve } from "@hono/node-server";
import { Hono } from "hono";
import productRoute from "./routes/product.js";
import categoryRoute from "./routes/category.js";
const app = new Hono();
app.route("/products", productRoute);
app.route("/categories", categoryRoute);
serve({
    fetch: app.fetch,
    port: 3000,
}, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
});
