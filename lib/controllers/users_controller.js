"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserToken = exports.getUsers = exports.createUser = void 0;
const mongo_connect_1 = require("../db/mongo_connect");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const collection = yield (0, mongo_connect_1.dbConnection)('users');
        const document = yield collection.insertOne(data);
        return res.status(200).json(document);
    }
    catch (error) {
        return res.status(500).json({ messge: `Error al insertar el documento ${error}` });
    }
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const collection = yield (0, mongo_connect_1.dbConnection)('users');
    const filteredDocs = yield collection.find({ $and: [{ email: email }, { password: password }] }).toArray();
    if (filteredDocs.length > 0) {
        const accessToken = jsonwebtoken_1.default.sign({ "email": email }, `${process.env.CLAVE_JWT}`, { expiresIn: "1h" });
        yield collection.updateOne({ $and: [{ email: email }, { password: password }] }, { $set: { "token": accessToken } });
        return res.status(200).json({ accessToken });
    }
    return res.status(500).json({ message: "Error Login" });
});
exports.getUsers = getUsers;
const getUserToken = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const collection = yield (0, mongo_connect_1.dbConnection)('users');
    const filteredDocs = yield collection.find({ email: email }).toArray();
    if (filteredDocs.length > 0) {
        return filteredDocs[0].token;
    }
    else
        return null;
});
exports.getUserToken = getUserToken;
