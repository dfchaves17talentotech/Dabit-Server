import { Router } from "express";
import { createContinent, deleteContinent, getContinents, getContinentsById, updateContinent } from "../controllers/continent_controller";
import { authenticateToken } from "../middleware/users_middleware";

const continentRoutes = Router();

continentRoutes.post('/continents', authenticateToken, createContinent);
continentRoutes.get('/continents', getContinents);
continentRoutes.get('/continents/:id', authenticateToken, getContinentsById)
continentRoutes.put('/continents', authenticateToken, updateContinent);
continentRoutes.delete('/continents/:id',authenticateToken, deleteContinent);


export {continentRoutes};