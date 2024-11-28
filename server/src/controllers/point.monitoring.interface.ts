export interface IPostPointMonitoring {
  name: string
  ubication: string
  length: string
  latitude: string
  temperature?: number
  date_register?: string
  date_updated?: Date
  status?: number
}

export interface IPutStatus {
  id: number
  status?: number
  visible?: number
}
