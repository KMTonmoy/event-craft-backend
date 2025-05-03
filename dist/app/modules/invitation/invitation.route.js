"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationRoute = void 0;
const express_1 = __importDefault(require("express"));
const invitation_controller_1 = require("./invitation.controller");
const router = express_1.default.Router();
router.post('/', invitation_controller_1.createInvitationHandler);
router.get('/:userId', invitation_controller_1.getInvitationsHandler);
router.patch('/respond/:invitationId', invitation_controller_1.respondToInvitationHandler);
router.delete('/:invitationId', invitation_controller_1.deleteInvitationHandler);
exports.InvitationRoute = router;
