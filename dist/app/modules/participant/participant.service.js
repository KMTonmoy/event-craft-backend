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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createParticipation = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.participation.create({
        data: {
            user_id: data.userId,
            event_id: data.eventId,
            status: data.status || client_1.ParticipationStatus.PENDING,
        },
    });
});
const getAllParticipations = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.participation.findMany({
        include: {
            user: true,
            event: true,
        },
    });
});
const getParticipationById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.participation.findUnique({
        where: { id },
        include: {
            user: true,
            event: true,
        },
    });
});
const updateParticipation = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.participation.update({
        where: { id },
        data: Object.assign(Object.assign({}, data), { status: data.status ? { set: data.status } : undefined }),
    });
});
const deleteParticipation = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.participation.delete({
        where: { id },
    });
});
exports.default = {
    createParticipation,
    getAllParticipations,
    getParticipationById,
    updateParticipation,
    deleteParticipation,
};
