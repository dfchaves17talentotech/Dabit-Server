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
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const users_controller_1 = require("../controllers/users_controller");
const authenticateToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ error: 'Auth Token Not Found' });
    }
    jsonwebtoken_1.default.verify(token, `${process.env.CLAVE_JWT}`, (err, data) => __awaiter(void 0, void 0, void 0, function* () {
        if (data !== undefined) {
            const emailExtract = data.email;
            const tokenDB = yield (0, users_controller_1.getUserToken)(emailExtract);
            if (tokenDB === token) {
                next();
            }
        }
        else {
            return res.status(403).json({ error: 'Invalid Token' });
        }
    }));
});
exports.authenticateToken = authenticateToken;
