import { PrismaClient } from '@prisma/client';
import { IInvitation } from './invitation.interface';

const prisma = new PrismaClient();

export const createInvitation = async (data: IInvitation) => {
  return await prisma.invitation.create({ data });
};

export const getInvitationsByUser = async (userId: string) => {
  return await prisma.invitation.findMany({
    where: { invited_user_id: userId },
    include: {
      event: true,
    },
  });
};

export const respondToInvitation = async (
  invitationId: string,
  accepted: boolean
) => {
  return await prisma.invitation.update({
    where: { id: invitationId },
    data: { accepted },
  });
};

export const deleteInvitation = async (invitationId: string) => {
  return await prisma.invitation.delete({
    where: { id: invitationId },
  });
};
