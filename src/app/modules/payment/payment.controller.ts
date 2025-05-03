import { Request, Response } from 'express';
import { createPayment, createPaymentIntent, createSubscription, getPaymentById, updatePaymentStatus } from './payment.service';

export const createPaymentIntentHandler = async (req: Request, res: Response) => {
  const { amount, currency } = req.body;
  try {
    const paymentIntent = await createPaymentIntent(amount, currency);
    res.status(200).json(paymentIntent);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const createPaymentHandler = async (req: Request, res: Response) => {
  const paymentData = req.body;
  try {
    const payment = await createPayment(paymentData);
    res.status(201).json(payment);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const getPaymentByIdHandler = async (req: Request, res: Response) => {
  const { paymentId } = req.params;
  try {
    const payment = await getPaymentById(paymentId);
    res.status(200).json(payment);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const updatePaymentStatusHandler = async (req: Request, res: Response) => {
  const { paymentId } = req.params;
  const { status } = req.body;
  try {
    const updatedPayment = await updatePaymentStatus(paymentId, status);
    res.status(200).json(updatedPayment);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};

export const createSubscriptionHandler = async (req: Request, res: Response) => {
  const { userId, plan } = req.body;
  try {
    const subscription = await createSubscription(userId, plan);
    res.status(200).json(subscription);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'An unknown error occurred' });
    }
  }
};
