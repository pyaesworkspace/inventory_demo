import prisma from "../db.js";
export const getAllCategories = async () => {
    try {
        const categories = await prisma.productCategory.findMany();
        return categories;
    }
    catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};
export const createCategory = async (data) => {
    try {
        const newCategory = await prisma.productCategory.create({
            data: data,
        });
        return newCategory;
    }
    catch (error) {
        console.error("Error creating category:", error);
        throw error;
    }
};
export const updateCategory = async (data) => {
    try {
        const updatedCategory = await prisma.productCategory.update({
            where: { id: data.id },
            data: {
                name: data.name,
                description: data.description,
            },
        });
        return updatedCategory;
    }
    catch (error) {
        console.error("Error updating category:", error);
        throw error;
    }
};
