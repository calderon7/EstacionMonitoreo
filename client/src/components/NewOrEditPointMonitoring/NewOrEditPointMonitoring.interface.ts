export interface IPropsNewOrEditPointMonitoring {
  setVisible: (value: boolean) => void
}

export interface ICreateOrEditPointMonitoring {
  id?: number
  name: string
  ubication: string
  length: string
  latitude: string
  temperature?: number
  date_register?: string
  date_updated?: Date
  status?: number
}

export type TCreateOrEditPointMonitoring =
  | 'id'
  | 'name'
  | 'ubication'
  | 'length'
  | 'latitude'
  | 'temperature'
  | 'status'
