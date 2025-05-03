import { PrismaClient } from '@prisma/client';
import Stripe from 'stripe';
import { PaymentData } from './payment.interface';
import { PaymentStatus } from '@prisma/client';  
const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2022-11-15" });

export const createPaymentIntent = async (amount: number, currency: string) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency,
      metadata: { orderId: '12345' },
    });
    return paymentIntent;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error('Error creating Payment Intent');
    }
    throw new Error('An unknown error occurred while creating Payment Intent');
  }
};

export const createPayment = async (data: PaymentData) => {
  try {
    const payment = await prisma.payment.create({
      data: {
        amount: data.amount,
        status: PaymentStatus.PENDING,  // Use the PaymentStatus enum
        payment_method: data.payment_method,
        user_id: data.user_id,
        event_id: data.event_id,
        stripe_payment_id: data.stripe_payment_id,
      },
    });
    return payment;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error('Error creating payment');
    }
    throw new Error('An unknown error occurred while creating the payment');
  }
};

export const getPaymentById = async (paymentId: string) => {
  try {
    const payment = await prisma.payment.findUnique({
      where: { id: paymentId },
    });
    return payment;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error('Error fetching payment details');
    }
    throw new Error('An unknown error occurred while fetching payment details');
  }
};

export const updatePaymentStatus = async (paymentId: string, status: PaymentStatus) => {
  try {
    const payment = await prisma.payment.update({
      where: { id: paymentId },
      data: { status },
    });
    return payment;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error('Error updating payment status');
    }
    throw new Error('An unknown error occurred while updating payment status');
  }
};

export const createSubscription = async (userId: string, plan: string) => {
  try {
    const subscription = await stripe.subscriptions.create({
      customer: userId,
      items: [{ price: plan }],
    });
    return subscription;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error('Error creating subscription');
    }
    throw new Error('An unknown error occurred while creating the subscription');
  }
};
