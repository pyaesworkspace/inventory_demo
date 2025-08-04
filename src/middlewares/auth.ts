import type { MiddlewareHandler } from "hono";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "defaultsecret";

export const authMiddleware: MiddlewareHandler = async (c, next) => {
  const authHeader = c.req.header("authorization");
  if (!authHeader) {
    return c.json({ error: "Unauthorized" }, 401);
  }

  const token = authHeader.replace("Bearer ", "");
  try {
    const payload = jwt.verify(token, SECRET) as any;
    c.set("user", payload); // Attach user info to context
    await next();
  } catch {
    return c.json({ error: "Invalid token" }, 401);
  }
};
