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
exports.deleteInvitation = exports.respondToInvitation = exports.getInvitationsByUser = exports.createInvitation = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createInvitation = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.invitation.create({ data });
});
exports.createInvitation = createInvitation;
const getInvitationsByUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.invitation.findMany({
        where: { invited_user_id: userId },
        include: {
            event: true,
        },
    });
});
exports.getInvitationsByUser = getInvitationsByUser;
const respondToInvitation = (invitationId, accepted) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.invitation.update({
        where: { id: invitationId },
        data: { accepted },
    });
});
exports.respondToInvitation = respondToInvitation;
const deleteInvitation = (invitationId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma.invitation.delete({
        where: { id: invitationId },
    });
});
exports.deleteInvitation = deleteInvitation;
