import { Hono } from "hono";
import { login } from "../services/authService";
const authRoute = new Hono();
authRoute.post("/login", async (c) => {
    const { email, password } = await c.req.json();
    try {
        const result = await login(email, password);
        return c.json(result);
    }
    catch (error) {
        console.error(error);
        return c.json({ error: "Invalid credentials" }, 401);
    }
});
export default authRoute;
