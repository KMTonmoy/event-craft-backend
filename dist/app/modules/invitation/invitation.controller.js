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
exports.deleteInvitationHandler = exports.respondToInvitationHandler = exports.getInvitationsHandler = exports.createInvitationHandler = void 0;
const invitation_service_1 = require("./invitation.service");
const createInvitationHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield (0, invitation_service_1.createInvitation)(data);
    res.status(201).json(result);
});
exports.createInvitationHandler = createInvitationHandler;
const getInvitationsHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    const result = yield (0, invitation_service_1.getInvitationsByUser)(userId);
    res.json(result);
});
exports.getInvitationsHandler = getInvitationsHandler;
const respondToInvitationHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { invitationId } = req.params;
    const { accepted } = req.body;
    const result = yield (0, invitation_service_1.respondToInvitation)(invitationId, accepted);
    res.json(result);
});
exports.respondToInvitationHandler = respondToInvitationHandler;
const deleteInvitationHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { invitationId } = req.params;
    yield (0, invitation_service_1.deleteInvitation)(invitationId);
    res.status(204).send();
});
exports.deleteInvitationHandler = deleteInvitationHandler;
