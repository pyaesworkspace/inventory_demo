import type { Context } from "hono";
import * as categoryService from "../services/categoryService.js";

export const getAllCategories = async (c: Context) => {
  const categories = await categoryService.getAllCategories();
  return c.json(categories);
};

export const createCategory = async (c: Context) => {
  const data = await c.req.json();
  const newCategory = await categoryService.createCategory(data);
  return c.json(newCategory, 201);
};
