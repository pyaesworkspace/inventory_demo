import * as userService from "../services/userService.js";
import type { Context } from "hono";

export const getAllUsers = async (c: Context) => {
  const users = await userService.getAllUsers();
  return c.json(users);
};

export const createUser = async (c: Context) => {
  const userData = await c.req.json();
  const newUser = await userService.createUser(userData);
  return c.json(newUser);
};

export const updateUser = async (c: Context) => {
  const userId = c.req.param("id");
  const userData = await c.req.json();
  const updatedUser = await userService.updateUser({ id: userId, ...userData });
  return c.json(updatedUser);
};

export const deleteUser = async (c: Context) => {
  const userId = c.req.param("id");
  await userService.deleteUser(userId);
  return c.json({ message: "User deleted successfully" });
};
