"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRoutes = void 0;
const express_1 = require("express");
const contact_controller_1 = require("../controllers/contact_controller");
const contactRoutes = (0, express_1.Router)();
exports.contactRoutes = contactRoutes;
contactRoutes.post('/contacts', contact_controller_1.createContact);
contactRoutes.get('/contacts', contact_controller_1.getContacts);
