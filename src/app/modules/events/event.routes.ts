import express from 'express'
import EventController from './event.controller'

const router = express.Router()

router.post('/events', EventController.createEvent)
router.get('/events', EventController.getAllEvents)
router.get('/events/:id', EventController.getEventById)
router.put('/events/:id', EventController.updateEvent)
router.delete('/events/:id', EventController.deleteEvent)

export const EventRoutes = router
