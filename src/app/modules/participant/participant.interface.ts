import { ParticipationStatus } from '@prisma/client'

export interface ICreateParticipation {
  userId: string
  eventId: string
  status?: ParticipationStatus  
}

export interface IUpdateParticipation {
  status: ParticipationStatus  
}
