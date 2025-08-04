import prisma from "../db";

export const getAllRoles = async () => {
  try {
    const roles = await prisma.role.findMany();
    return roles;
  } catch (error) {
    console.error("Error fetching roles:", error);
    throw error;
  }
};

export const createRole = async (data: { name: string }) => {
  try {
    const newRole = await prisma.role.create({
      data: data,
    });
    return newRole;
  } catch (error) {
    console.error("Error creating role:", error);
    throw error;
  }
};

export const updateRole = async (data: { id: string; name?: string }) => {
  try {
    const updatedRole = await prisma.role.update({
      where: { id: data.id },
      data: {
        name: data.name || "",
      },
    });
    return updatedRole;
  } catch (error) {
    console.error("Error updating role:", error);
    throw error;
  }
};

export const deleteRole = async (id: string) => {
  try {
    const deletedRole = await prisma.role.delete({
      where: { id: id },
    });
    return deletedRole;
  } catch (error) {
    console.error("Error deleting role:", error);
    throw error;
  }
};
