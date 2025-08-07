import * as roleService from "../services/roleService";
import type { Context } from "hono";

export const getAllRoles = async (c: Context) => {
  const roles = await roleService.getAllRoles();
  return c.json(roles);
};

export const createRole = async (c: Context) => {
  const data = await c.req.json();
  const newRole = await roleService.createRole(data);
  return c.json(newRole, 201);
};

export const updateRole = async (c: Context) => {
  const data = await c.req.json();
  const updatedRole = await roleService.updateRole(data);
  return c.json(updatedRole);
};

export const deleteRole = async (c: Context) => {
  const { id } = c.req.param();
  const deletedRole = await roleService.deleteRole(id);
  return c.json(deletedRole);
};
