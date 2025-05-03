import express from 'express';
import { createPaymentIntentHandler, createPaymentHandler, getPaymentByIdHandler, updatePaymentStatusHandler, createSubscriptionHandler } from './payment.controller';

const router = express.Router();

router.post('/create-payment-intent', createPaymentIntentHandler);
router.post('/create-payment', createPaymentHandler);
router.get('/payment/:paymentId', getPaymentByIdHandler);
router.patch('/payment/:paymentId/status', updatePaymentStatusHandler);
router.post('/create-subscription', createSubscriptionHandler);

export const PaymentRoute = router;
