"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("./UserController"));
const router = express_1.default.Router();
router.get('/users', UserController_1.default.getAllUsers);
router.get('/users/:email', UserController_1.default.getUserByEmail);
exports.UserRoutes = router;
