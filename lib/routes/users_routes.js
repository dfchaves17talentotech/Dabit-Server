"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const users_controller_1 = require("../controllers/users_controller");
const userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
userRoutes.post('/users', users_controller_1.createUser);
userRoutes.post('/getUsers', users_controller_1.getUsers);
