import { Router } from "express";
import { createContact, getContacts } from "../controllers/contact_controller";
import { authenticateToken } from "../middleware/users_middleware";

const contactRoutes = Router();

contactRoutes.post('/contacts', createContact);
contactRoutes.get('/contacts', authenticateToken, getContacts);

export {contactRoutes};