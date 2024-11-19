import { Router } from "express";
import { createProject, deleteProjects, getProjectById, getProjects, updateProjects } from "../controllers/project_controller";
import { authenticateToken } from "../middleware/users_middleware";

const projectRoutes = Router();

projectRoutes.post('/projects', authenticateToken, createProject);
projectRoutes.get('/projects', getProjects);
projectRoutes.get('/projects/:id', authenticateToken, getProjectById)
projectRoutes.put('/projects',authenticateToken, updateProjects);
projectRoutes.delete('/projects', authenticateToken, deleteProjects);


export {projectRoutes};