import { serve } from "@hono/node-server";
import { Hono } from "hono";
import productRoute from "./routes/product.js";
import categoryRoute from "./routes/category.js";
import authRoute from "./routes/auth.js";

const app = new Hono();

app.route("/auth", authRoute);
app.route("/products", productRoute);
app.route("/categories", categoryRoute);

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
