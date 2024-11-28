export interface PuntoMonitoreo {
  id: number
  name: string
  ubication: string
  length: string
  latitude: string
  temperature?: number
  date_register?: string
  date_updated?: Date
  status?: number
}