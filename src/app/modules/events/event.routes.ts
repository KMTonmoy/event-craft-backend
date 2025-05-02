import express, { Request, Response } from 'express';
import EventController from './event.controller';

const router = express.Router();

router.post('/events', async (req: Request, res: Response) => {
  try {
    await EventController.createEvent(req, res);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Unknown error occurred' });
  }
});
router.get('/events', async (req: Request, res: Response) => {
  try {
    await EventController.getAllEvents(req, res);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Unknown error occurred' });
  }
});

router.get('/events/:id', async (req: Request, res: Response) => {
  try {
    await EventController.getEventById(req, res);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Unknown error occurred' });
  }
});
router.put('/events/:id', async (req: Request, res: Response) => {
  try {
    await EventController.updateEvent(req, res);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Unknown error occurred' });
  }
});

router.delete('/events/:id', async (req: Request, res: Response) => {
  try {
    await EventController.deleteEvent(req, res);
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'Unknown error occurred' });
  }
});

export const EventRoutes = router;
