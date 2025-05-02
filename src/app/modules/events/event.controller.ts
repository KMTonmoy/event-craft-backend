import { Request, Response } from 'express'
import EventService from './event.service'
import { ICreateEvent, IUpdateEvent } from './event.interface'

const createEvent = async (req: Request, res: Response): Promise<Response> => {
  const data: ICreateEvent = req.body
  try {
    const event = await EventService.createEvent(data)
    return res.status(201).json({ success: true, message: 'Event created successfully', data: event })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ success: false, message: error.message })
    }
    return res.status(500).json({ success: false, message: 'Unknown error occurred' })
  }
}

const getAllEvents = async (_: Request, res: Response): Promise<Response> => {
  try {
    const events = await EventService.getAllEvents()
    return res.status(200).json({ success: true, message: 'Events fetched successfully', data: events })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ success: false, message: error.message })
    }
    return res.status(500).json({ success: false, message: 'Unknown error occurred' })
  }
}

const getEventById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params
  try {
    const event = await EventService.getEventById(id)
    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found' })
    }
    return res.status(200).json({ success: true, message: 'Event fetched successfully', data: event })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ success: false, message: error.message })
    }
    return res.status(500).json({ success: false, message: 'Unknown error occurred' })
  }
}

const updateEvent = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params
  const data: IUpdateEvent = req.body
  try {
    const updatedEvent = await EventService.updateEvent(id, data)
    return res.status(200).json({ success: true, message: 'Event updated successfully', data: updatedEvent })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ success: false, message: error.message })
    }
    return res.status(500).json({ success: false, message: 'Unknown error occurred' })
  }
}

const deleteEvent = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params
  try {
    await EventService.deleteEvent(id)
    return res.status(200).json({ success: true, message: 'Event deleted successfully' })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({ success: false, message: error.message })
    }
    return res.status(500).json({ success: false, message: 'Unknown error occurred' })
  }
}

const EventController = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
}

export default EventController
