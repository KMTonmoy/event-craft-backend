import express, { Request, Response } from 'express'
import ParticipantController from './participant.controller'

const router = express.Router()

router.post('/participations', async (req: Request, res: Response) => {
  await ParticipantController.createParticipation(req, res)
})
router.get('/participations', async (req: Request, res: Response) => {
  await ParticipantController.getAllParticipations(req, res)
})
router.get('/participations/:id', async (req: Request, res: Response) => {
  await ParticipantController.getParticipationById(req, res)
})
router.put('/participations/:id', async (req: Request, res: Response) => {
  await ParticipantController.updateParticipation(req, res)
})
router.delete('/participations/:id', async (req: Request, res: Response) => {
  await ParticipantController.deleteParticipation(req, res)
})

export const ParticipantRoutes = router
