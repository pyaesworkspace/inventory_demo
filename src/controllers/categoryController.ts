import type { Context } from "hono";
import * as categoryService from "../services/categoryService.js";

export const getAllCategories = async (c: Context) => {
  const categories = await categoryService.getAllCategories();
  return c.json(categories);
};

export const createCategory = async (c: Context) => {
  const data = await c.req.json();
  const user = c.get("user");
  const userId = user ? user.userId : null;
  const newCategory = await categoryService.createCategory({
    ...data,
    createdById: userId,
  });
  return c.json(newCategory, 201);
};

export const updateCategory = async (c: Context) => {
  const data = await c.req.json();
  const user = c.get("user");
  const userId = user ? user.userId : null;
  const updatedCategory = await categoryService.updateCategory({
    ...data,
    createdById: userId,
  });
  return c.json(updatedCategory);
};
export const deleteCategory = async (c: Context) => {
  const { id } = c.req.param();
  const deletedCategory = await categoryService.deleteCategory(id);
  return c.json(deletedCategory);
};
