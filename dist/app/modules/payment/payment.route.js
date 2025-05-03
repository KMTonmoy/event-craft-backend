"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRoute = void 0;
const express_1 = __importDefault(require("express"));
const payment_controller_1 = require("./payment.controller");
const router = express_1.default.Router();
router.post('/create-payment-intent', payment_controller_1.createPaymentIntentHandler);
router.post('/create-payment', payment_controller_1.createPaymentHandler);
router.get('/payment/:paymentId', payment_controller_1.getPaymentByIdHandler);
router.patch('/payment/:paymentId/status', payment_controller_1.updatePaymentStatusHandler);
router.post('/create-subscription', payment_controller_1.createSubscriptionHandler);
exports.PaymentRoute = router;
