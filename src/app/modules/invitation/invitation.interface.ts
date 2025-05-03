export interface IInvitation {
    event_id: string;
    invited_user_id: string;
    payment_status?: 'PENDING' | 'PAID' | 'REFUNDED' | 'NONE';
    accepted?: boolean;
  }
  