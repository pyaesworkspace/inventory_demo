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

export const updateProduct = async (c: Context) => {
  const data = await c.req.json();
  const updatedProduct = await productService.updateProduct(data);
  return c.json(updatedProduct);
};

export const deleteProduct = async (c: Context) => {
  const { id } = c.req.param();
  const deletedProduct = await productService.deleteProduct(id);
  return c.json(deletedProduct);
};
