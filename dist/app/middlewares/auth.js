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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../config"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const prisma_1 = __importDefault(require("../utils/prisma"));
const auth = (roles = []) => {
    return (0, catchAsync_1.default)((req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const bearerToken = req.headers.authorization;
        if (!(bearerToken === null || bearerToken === void 0 ? void 0 : bearerToken.startsWith('Bearer '))) {
            throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, 'Invalid or missing authorization header');
        }
        const token = bearerToken.split(' ')[1];
        const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwt_access_token_secret);
        const email = decoded === null || decoded === void 0 ? void 0 : decoded.email;
        if (!email) {
            throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, 'Token is invalid');
        }
        const user = yield prisma_1.default.user.findUnique({
            where: { email },
        });
        if (!user || user.is_deleted) {
            throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, 'You are not authorized');
        }
        if (roles.length && !roles.includes(user.role)) {
            throw new AppError_1.default(http_status_1.default.FORBIDDEN, 'Access denied');
        }
        req.user = user;
        next();
    }));
};
exports.default = auth;
