import { Request, Response } from 'express'
import ParticipantService from './participant.service'
import { ICreateParticipation, IUpdateParticipation } from './participant.interface'

const createParticipation = async (req: Request, res: Response): Promise<Response> => {
  const data: ICreateParticipation = req.body
  try {
    const participation = await ParticipantService.createParticipation(data)
    return res.status(201).json({ success: true, message: 'Participation request sent', data: participation })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return res.status(500).json({ success: false, message: errorMessage })
  }
}

const getAllParticipations = async (_: Request, res: Response): Promise<Response> => {
  try {
    const participations = await ParticipantService.getAllParticipations()
    return res.status(200).json({ success: true, data: participations })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return res.status(500).json({ success: false, message: errorMessage })
  }
}

const getParticipationById = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params
  try {
    const participation = await ParticipantService.getParticipationById(id)
    if (!participation) {
      return res.status(404).json({ success: false, message: 'Participation not found' })
    }
    return res.status(200).json({ success: true, data: participation })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return res.status(500).json({ success: false, message: errorMessage })
  }
}

const updateParticipation = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params
  const data: IUpdateParticipation = req.body
  try {
    const updated = await ParticipantService.updateParticipation(id, data)
    return res.status(200).json({ success: true, message: 'Participation updated', data: updated })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return res.status(500).json({ success: false, message: errorMessage })
  }
}

const deleteParticipation = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params
  try {
    await ParticipantService.deleteParticipation(id)
    return res.status(200).json({ success: true, message: 'Participation deleted' })
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return res.status(500).json({ success: false, message: errorMessage })
  }
}

export default {
  createParticipation,
  getAllParticipations,
  getParticipationById,
  updateParticipation,
  deleteParticipation,
}
