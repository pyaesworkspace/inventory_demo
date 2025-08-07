import prisma from "../db";
export const getAllPermissions = async () => {
    try {
        const permissions = await prisma.permission.findMany();
        return permissions;
    }
    catch (error) {
        console.error("Error fetching permissions:", error);
        throw error;
    }
};
export const createPermission = async (data) => {
    try {
        const permission = await prisma.permission.create({
            data: {
                name: data.name,
                description: data.description || "",
                module: data.module || "",
                action: data.action || "",
            },
        });
        return permission;
    }
    catch (error) {
        console.error("Error creating permission:", error);
        throw error;
    }
};
export const updatePermission = async (id, data) => {
    try {
        const permission = await prisma.permission.update({
            where: { id },
            data: {
                name: data.name,
                description: data.description || "",
            },
        });
        return permission;
    }
    catch (error) {
        console.error("Error updating permission:", error);
        throw error;
    }
};
export const deletePermission = async (id) => {
    try {
        const permission = await prisma.permission.delete({
            where: { id },
        });
        return permission;
    }
    catch (error) {
        console.error("Error deleting permission:", error);
        throw error;
    }
};
