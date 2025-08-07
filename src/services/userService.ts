import prisma from "../db";

export const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};

// assign role to user when user create
export const createUser = async (data: {
  email: string;
  password: string;
  roleId: string;
}) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        email: data.email,
        password: data.password,
      },
    });

    await prisma.userRole.create({
      data: {
        userId: newUser.id,
        roleId: data.roleId,
      },
    });

    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const updateUser = async (data: {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  roleId?: string;
}) => {
  try {
    if (data.email) {
      const existing = await prisma.user.findUnique({
        where: { email: data.email },
      });
      if (existing && existing.id !== data.id) {
        throw new Error("Email already exists");
      }
    }
    const updatedUser = await prisma.user.update({
      where: { id: data.id },
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });

    if (data.roleId) {
      await prisma.userRole.upsert({
        where: { userId_roleId: { userId: data.id, roleId: data.roleId } },
        update: { roleId: data.roleId },
        create: { userId: data.id, roleId: data.roleId },
      });
    }
    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

export const deleteUser = async (id: string) => {
  try {
    const deleteUser = await prisma.user.delete({
      where: { id },
    });
    return deleteUser;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
