import { Request, Response } from 'express';
import {
  createInvitation,
  getInvitationsByUser,
  respondToInvitation,
  deleteInvitation,
} from './invitation.service';

export const createInvitationHandler = async (req: Request, res: Response) => {
  const data = req.body;
  const result = await createInvitation(data);
  res.status(201).json(result);
};

export const getInvitationsHandler = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const result = await getInvitationsByUser(userId);
  res.json(result);
};

export const respondToInvitationHandler = async (req: Request, res: Response) => {
  const { invitationId } = req.params;
  const { accepted } = req.body;
  const result = await respondToInvitation(invitationId, accepted);
  res.json(result);
};

export const deleteInvitationHandler = async (req: Request, res: Response) => {
  const { invitationId } = req.params;
  await deleteInvitation(invitationId);
  res.status(204).send();
};
