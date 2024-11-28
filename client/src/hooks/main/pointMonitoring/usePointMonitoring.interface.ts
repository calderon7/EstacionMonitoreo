export interface IPropsGetPointMonitoring {
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

export interface IPropsGetPointMonitoringTable {
  data: IPropsGetPointMonitoring[]
  totalRecords: number
}

export interface IPropsPutStatusPointMonitoring {
    id?: number
    status?: number
  }