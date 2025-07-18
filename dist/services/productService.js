import prisma from "../db.js";
export const getAllProducts = async () => {
    try {
        const products = await prisma.product.findMany({
            include: {
                category: true,
            },
        });
        return products;
    }
    catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};
export const createProduct = async (data) => {
    try {
        const newProduct = await prisma.product.create({
            data: data,
        });
        return newProduct;
    }
    catch (error) {
        console.error("Error creating product:", error);
        throw error;
    }
};
