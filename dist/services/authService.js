import prisma from "../db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const SECRET = process.env.JWT_SECRET || "defaultsecret";
export const login = async (email, password) => {
    const user = await prisma.user.findUnique({
        where: { email },
        include: { roles: true, permissions: true },
    });
    if (!user || (await bcrypt.compare(password, user.password))) {
        throw new Error("Invalid credentials");
    }
    const roles = user.roles.map((role) => role.role.name);
    const permissions = user.permissions.map((permission) => permission.permission.name);
    const token = jwt.sign({ userId: user.id, email: user.email, roles, permissions }, SECRET, { expiresIn: "1d" });
    return {
        token,
        user: {
            id: user.id,
            email: user.email,
            roles,
            permissions,
        },
    };
};
