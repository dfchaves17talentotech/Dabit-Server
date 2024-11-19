import { Router } from "express";
import { createUser, getUsers } from "../controllers/users_controller";
import { authenticateToken } from "../middleware/users_middleware";

const userRoutes = Router();

userRoutes.post('/users', authenticateToken, createUser);
userRoutes.post('/getUsers', getUsers);


export {userRoutes};