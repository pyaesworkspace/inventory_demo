import prisma from "../db.js";

export const getAllCategories = async () => {
  try {
    const categories = await prisma.productCategory.findMany();
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const createCategory = async (data: {
  name: string;
  createdById: string;
}) => {
  try {
    const newCategory = await prisma.productCategory.create({
      data: data,
    });
    return newCategory;
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
};

export const updateCategory = async (data: {
  id: string;
  name?: string;
  createdById?: string;
}) => {
  try {
    const updatedCategory = await prisma.productCategory.update({
      where: { id: data.id },
      data: {
        name: data.name || "",
        createdById: data.createdById || "",
      },
    });
    return updatedCategory;
  } catch (error) {
    console.error("Error updating category:", error);
    throw error;
  }
};

export const deleteCategory = async (id: string) => {
  try {
    const deletedCategory = await prisma.productCategory.delete({
      where: { id: id },
    });
    return deletedCategory;
  } catch (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
};
