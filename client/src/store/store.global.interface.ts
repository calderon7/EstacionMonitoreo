import { PuntoMonitoreo } from "../components"

export type TGlobalStore = {
    editPointMonitoring: PuntoMonitoreo[] | any
}

export type TGlobalActions = {
    setEditPointMonitoring: (editPointMonitoring: PuntoMonitoreo | any) => void
}