export interface PaymentData {
    amount: number;
    payment_method: string;
    user_id: string;
    event_id: string; 
    stripe_payment_id: string;  
  }
  
  export interface Payment {
    id: string;
    amount: number;
    status: 'PENDING' | 'COMPLETED' | 'FAILED';
    payment_method: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
  }
  