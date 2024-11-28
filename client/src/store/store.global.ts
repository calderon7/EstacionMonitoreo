import { create } from 'zustand'
import { TGlobalActions, TGlobalStore } from './store.global.interface'
import { PuntoMonitoreo } from '../components'

export const GlobalStore = create<TGlobalStore & TGlobalActions>((set) => ({
  editPointMonitoring: null,
  coordinates: [],
  setEditPointMonitoring: (editPointMonitoring: PuntoMonitoreo) => {
    set({
      editPointMonitoring,
    })
  },
  setCoordinates: (coordinates: MapComponentProps[]) => {
    set({
      coordinates,
    })
  },
}))
