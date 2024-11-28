import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import api from '../../../api/conection-backend'
import { ICreateOrEditPointMonitoring } from '../../../components'
import {
  IPropsGetPointMonitoringTable,
  IPropsPutStatusPointMonitoring,
} from './usePointMonitoring.interface'

async function fetchPointMonitoring(ctx: QueryFunctionContext<any>) {
  const [] = ctx.queryKey
  const { data } = await api.get<IPropsGetPointMonitoringTable>(
    `/main/point-monitoring`
  )
  return data
}

export const mutationFetchUpdateStatusPointMonitoring = (
  updateStatus: IPropsPutStatusPointMonitoring
) =>
  api.put(
    `/main/update-status-point-monitoring/${updateStatus.id}`,
    updateStatus
  )

export const mutationFetchNewPointMonitoring = (
  newPoint: ICreateOrEditPointMonitoring
) => api.post('/main/create-point-monitoring/', newPoint)

export const mutationFetchUpdatePointMonitoring = (
  updatePoint: ICreateOrEditPointMonitoring
) => api.put(`/main/edit-point-monitoring/${updatePoint.id}`, updatePoint)

export function useFetchPointMonitoring() {
  return useQuery({
    queryKey: ['pointMonitoring'],
    queryFn: fetchPointMonitoring,
    refetchOnWindowFocus: false,
  })
}
