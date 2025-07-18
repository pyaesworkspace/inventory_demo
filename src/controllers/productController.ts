import type { Context } from "hono";
import * as productService from "../services/productService.js";

export const getAllProducts = async (c: Context) => {
  const products = await productService.getAllProducts();
  return c.json(products);
};

export const createProduct = async (c: Context) => {
  const data = await c.req.json();
  const newProduct = await productService.createProduct(data);
  return c.json(newProduct, 201);
};
