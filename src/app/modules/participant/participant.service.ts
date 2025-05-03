import { ParticipationStatus, PrismaClient } from '@prisma/client'
import { ICreateParticipation, IUpdateParticipation } from './participant.interface'

const prisma = new PrismaClient()

const createParticipation = async (data: ICreateParticipation) => {
  return await prisma.participation.create({
    data: {
      user_id: data.userId,
      event_id: data.eventId,
      status: data.status || ParticipationStatus.PENDING,
    },
  });
}

const getAllParticipations = async () => {
  return await prisma.participation.findMany({
    include: {
      user: true,
      event: true,
    },
  })
}

const getParticipationById = async (id: string) => {
  return await prisma.participation.findUnique({
    where: { id },
    include: {
      user: true,
      event: true,
    },
  })
}

const updateParticipation = async (id: string, data: IUpdateParticipation) => {
  return await prisma.participation.update({
    where: { id },
    data: {
      ...data,
      status: data.status ? { set: data.status } : undefined,
    },
  })
}

const deleteParticipation = async (id: string) => {
  return await prisma.participation.delete({
    where: { id },
  })
}

export default {
  createParticipation,
  getAllParticipations,
  getParticipationById,
  updateParticipation,
  deleteParticipation,
}
