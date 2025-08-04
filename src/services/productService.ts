import prisma from "../db.js";

export const getAllProducts = async () => {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
      },
    });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const createProduct = async (data: {
  name: string;
  description?: string;
  price: number;
  categoryId: string;
  stock: number;
}) => {
  try {
    const newProduct = await prisma.product.create({
      data: {
        name: data.name,
        description: data.description || "",
        price: data.price,
        categoryId: data.categoryId,
        stock: data.stock,
      },
    });
    return newProduct;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

export const updateProduct = async (data: {
  id: string;
  name?: string;
  description?: string;
  price?: number;
  categoryId?: string;
  stock?: number;
}) => {
  try {
    const updatedProduct = await prisma.product.update({
      where: { id: data.id },
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        categoryId: data.categoryId,
        stock: data.stock,
      },
    });
    return updatedProduct;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const deletedProduct = await prisma.product.delete({
      where: { id: id },
    });
    return deletedProduct;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
