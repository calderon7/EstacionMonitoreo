import { PuntoMonitoreo } from "../components"

export type TGlobalStore = {
    editPointMonitoring: PuntoMonitoreo[] | any
    coordinates: IPosition[] | any
}

export type TGlobalActions = {
    setEditPointMonitoring: (editPointMonitoring: PuntoMonitoreo | any) => void
    setCoordinates: (coordinates: IPosition[] | any) => void
}