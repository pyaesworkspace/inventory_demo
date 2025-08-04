import * as categoryService from "../services/categoryService.js";
export const getAllCategories = async (c) => {
    const categories = await categoryService.getAllCategories();
    return c.json(categories);
};
export const createCategory = async (c) => {
    const data = await c.req.json();
    const newCategory = await categoryService.createCategory(data);
    return c.json(newCategory, 201);
};
export const updateCategory = async (c) => {
    const data = await c.req.json();
    const updatedCategory = await categoryService.updateCategory(data);
    return c.json(updatedCategory);
};
export const deleteCategory = async (c) => {
    const { id } = c.req.param();
    const deletedCategory = await categoryService.deleteCategory(id);
    return c.json(deletedCategory);
};
