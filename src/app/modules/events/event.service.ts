import { PrismaClient } from '@prisma/client'
import { ICreateEvent, IUpdateEvent } from './event.interface'

const prisma = new PrismaClient()

const createEvent = async (data: ICreateEvent) => {
  return await prisma.event.create({
    data: {
      title: data.title,
      category: data.category,
      image: data.image,
      date: new Date(data.date),
      location: data.location,
      isPaid: data.isPaid,
      isPrivate: data.isPrivate,
      price: data.price,
      Author: data.Author,
      isFeatureSelected: data.isFeatureSelected,
      fee: data.isPaid ? data.price : 0,
      visibility: data.isPrivate ? 'PRIVATE' : 'PUBLIC',
      creator: { connect: { id: data.creator_id } },
    },
  })
}

const getAllEvents = async () => {
  return await prisma.event.findMany()
}

const getEventById = async (id: string) => {
  return await prisma.event.findUnique({
    where: { id },
  })
}

const updateEvent = async (id: string, data: IUpdateEvent) => {
  return await prisma.event.update({
    where: { id },
    data,
  })
}

const deleteEvent = async (id: string) => {
  return await prisma.event.delete({
    where: { id },
  })
}

export default {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
}
