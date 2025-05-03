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
exports.createSubscriptionHandler = exports.updatePaymentStatusHandler = exports.getPaymentByIdHandler = exports.createPaymentHandler = exports.createPaymentIntentHandler = void 0;
const payment_service_1 = require("./payment.service");
const createPaymentIntentHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { amount, currency } = req.body;
    try {
        const paymentIntent = yield (0, payment_service_1.createPaymentIntent)(amount, currency);
        res.status(200).json(paymentIntent);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});
exports.createPaymentIntentHandler = createPaymentIntentHandler;
const createPaymentHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const paymentData = req.body;
    try {
        const payment = yield (0, payment_service_1.createPayment)(paymentData);
        res.status(201).json(payment);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});
exports.createPaymentHandler = createPaymentHandler;
const getPaymentByIdHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { paymentId } = req.params;
    try {
        const payment = yield (0, payment_service_1.getPaymentById)(paymentId);
        res.status(200).json(payment);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});
exports.getPaymentByIdHandler = getPaymentByIdHandler;
const updatePaymentStatusHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { paymentId } = req.params;
    const { status } = req.body;
    try {
        const updatedPayment = yield (0, payment_service_1.updatePaymentStatus)(paymentId, status);
        res.status(200).json(updatedPayment);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});
exports.updatePaymentStatusHandler = updatePaymentStatusHandler;
const createSubscriptionHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, plan } = req.body;
    try {
        const subscription = yield (0, payment_service_1.createSubscription)(userId, plan);
        res.status(200).json(subscription);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});
exports.createSubscriptionHandler = createSubscriptionHandler;
