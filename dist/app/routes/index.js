"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = require("../modules/auth/auth.routes");
const User_route_1 = require("../modules/User/User.route");
const event_routes_1 = require("../modules/events/event.routes");
const invitation_route_1 = require("../modules/invitation/invitation.route");
// import { PaymentRoute } from '../modules/payment/payment.route';
const participant_routes_1 = require("../modules/participant/participant.routes");
const router = express_1.default.Router();
const routes = [
    {
        path: '/auth',
        route: auth_routes_1.AuthRoutes,
    },
    {
        path: '/users',
        route: User_route_1.UserRoutes,
    },
    {
        path: '/event',
        route: event_routes_1.EventRoutes,
    },
    {
        path: '/invitations',
        route: invitation_route_1.InvitationRoute,
    },
    // {
    //   path: '/pay',
    //   route: PaymentRoute,
    // },
    {
        path: '/participant',
        route: participant_routes_1.ParticipantRoutes,
    },
];
routes.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;
