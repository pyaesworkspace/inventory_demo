import * as permissionService from "../services/permissionService.js";
export const getAllPermissions = async (c) => {
    const permissions = await permissionService.getAllPermissions();
    return c.json(permissions);
};
export const createPermission = async (c) => {
    const data = await c.req.json();
    const newPermission = await permissionService.createPermission(data);
    return c.json(newPermission, 201);
};
export const updatePermission = async (c) => {
    const data = await c.req.json();
    const updatedPermission = await permissionService.updatePermission(data.id, data);
    return c.json(updatedPermission);
};
export const deletePermission = async (c) => {
    const { id } = c.req.param();
    const deletedPermission = await permissionService.deletePermission(id);
    return c.json(deletedPermission);
};
