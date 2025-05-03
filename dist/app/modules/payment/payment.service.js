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
exports.createSubscription = exports.updatePaymentStatus = exports.getPaymentById = exports.createPayment = exports.createPaymentIntent = void 0;
const client_1 = require("@prisma/client");
const stripe_1 = __importDefault(require("stripe"));
const client_2 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY, { apiVersion: "2022-11-15" });
const createPaymentIntent = (amount, currency) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paymentIntent = yield stripe.paymentIntents.create({
            amount: amount * 100,
            currency,
            metadata: { orderId: '12345' },
        });
        return paymentIntent;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
            throw new Error('Error creating Payment Intent');
        }
        throw new Error('An unknown error occurred while creating Payment Intent');
    }
});
exports.createPaymentIntent = createPaymentIntent;
const createPayment = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payment = yield prisma.payment.create({
            data: {
                amount: data.amount,
                status: client_2.PaymentStatus.PENDING, // Use the PaymentStatus enum
                payment_method: data.payment_method,
                user_id: data.user_id,
                event_id: data.event_id,
                stripe_payment_id: data.stripe_payment_id,
            },
        });
        return payment;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
            throw new Error('Error creating payment');
        }
        throw new Error('An unknown error occurred while creating the payment');
    }
});
exports.createPayment = createPayment;
const getPaymentById = (paymentId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payment = yield prisma.payment.findUnique({
            where: { id: paymentId },
        });
        return payment;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
            throw new Error('Error fetching payment details');
        }
        throw new Error('An unknown error occurred while fetching payment details');
    }
});
exports.getPaymentById = getPaymentById;
const updatePaymentStatus = (paymentId, status) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payment = yield prisma.payment.update({
            where: { id: paymentId },
            data: { status },
        });
        return payment;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
            throw new Error('Error updating payment status');
        }
        throw new Error('An unknown error occurred while updating payment status');
    }
});
exports.updatePaymentStatus = updatePaymentStatus;
const createSubscription = (userId, plan) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subscription = yield stripe.subscriptions.create({
            customer: userId,
            items: [{ price: plan }],
        });
        return subscription;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
            throw new Error('Error creating subscription');
        }
        throw new Error('An unknown error occurred while creating the subscription');
    }
});
exports.createSubscription = createSubscription;
