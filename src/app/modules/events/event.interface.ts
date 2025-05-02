export interface ICreateEvent {
    title: string
    category: string
    image: string
    date: string
    location: string
    isPaid: boolean
    isPrivate: boolean
    price: number
    Author: string
    isFeatureSelected: boolean
    creator_id: string
  }
  
  export interface IUpdateEvent {
    title?: string
    category?: string
    image?: string
    date?: string
    location?: string
    isPaid?: boolean
    isPrivate?: boolean
    price?: number
    isFeatureSelected?: boolean
  }
  