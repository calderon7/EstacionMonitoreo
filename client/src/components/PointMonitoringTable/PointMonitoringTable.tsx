
import { t } from 'i18next'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Tag } from 'primereact/tag'
import { useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import { formatDate, getSeverityName, START_ICON_LIGHT } from '../../Global'
import { mutationFetchUpdateStatusPointMonitoring, useFetchPointMonitoring } from '../../hooks/main/pointMonitoring/usePointMonitoring'
import { IPropsGetPointMonitoring } from '../../hooks/main/pointMonitoring/usePointMonitoring.interface'
import { GlobalStore } from '../../store'
import { PuntoMonitoreo } from '../pages'
import Sidebar from '../ui/sidebar/Sidebar'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import queryClient from '../../queryClient'

function PointMonitoringTable() {
  const [pointMonitoringTable, setPointMonitoringTable] = useState<
    PuntoMonitoreo[]
  >([])

  const { editPointMonitoring, setEditPointMonitoring } = GlobalStore()
  const [totalRecords, setTotalRecords] = useState(0)
  const [isShowCreateSidebar, setIsShowCreateSidebar] = useState(false)
  const {
    data: pointMonitoring,
    isLoading,
    isError,
  } = useFetchPointMonitoring()

  useEffect(() => {
    if (pointMonitoring?.data) {
      const updatedPointMonitoring = pointMonitoring.data.map(
        (point: IPropsGetPointMonitoring) => ({
          ...point,
        })
      )

      setPointMonitoringTable(updatedPointMonitoring)
      setTotalRecords(updatedPointMonitoring.length)
    } else if (!isLoading && isError) {
      console.error('Error al cargar los datos de monitoreo de puntos')
    }
  }, [pointMonitoring, isLoading, isError])

  const dateBodyTemplateLastUpdated = (rowData: IPropsGetPointMonitoring) => {
    return formatDate(new Date(rowData.date_updated ?? ''), 'yyyy-mm-dd')
  }

  const statusBodyTemplate = (rowData: IPropsGetPointMonitoring) => {
    return (
      <Tag
        className="ml-2 background-container-semi-gray-color"
        value={
          <div className="flex align-items-center ">
            <span
              className="font-lg text-base"
              style={{
                color: `${rowData.status === 1 ? '#018e4c' : '#b90000'}`,
              }}
            >
              {getSeverityName(rowData.status === 1 ? 1 : 0)}
            </span>
          </div>
        }
        style={{
          backgroundColor: `${rowData.status === 1 ? '#e6ffed' : '#ffebee'}`,
          padding: '4px 8px',
        }}
      />
    )
  }

  const actionsBody = (rowData: IPropsGetPointMonitoring) => {
    return (
      <div className="w-full flex flex-row align-items-center justify-content-center gap-2 actions-body">
        <span
          title={t(rowData.status === 1 ? 'hideElement' : 'showElement', {
            element: rowData.id,
          })}
            onClick={async () => {
              try {
                toast.loading(t('updateInformation'), {
                  duration: 3000000,
                })
                await mutateAsyncUpdateStatusPointMonitoring(
                  {id: rowData.id,
                  status: rowData.status === 1 ? 0 : 1,}
                )
              } catch (error) {
                toast.dismiss()
                toast.error(t('unknownError'), { duration: 5000 })
              } finally {
                toast.dismiss()
              }
            }}
        >
          <i
            className={`${START_ICON_LIGHT}${
              rowData.status == 0 ? 'eye-slash' : 'eye'
            } text-xl`}
          ></i>
        </span>
        <span
          title={t('editElement', { element: rowData.id })}
          onClick={() => {
            setEditPointMonitoring(rowData), setIsShowCreateSidebar(true)
          }}
        >
          <i className={`${START_ICON_LIGHT}pen-to-square text-xl`}></i>
        </span>
        <span
          title={t('deleteElement', { element: rowData.id })}
          //   onClick={() =>
          //     confirmDialog({
          //       message: (
          //         <Trans
          //           i18nKey="doYouWantDeleteRecord"
          //           components={{ strong: <strong /> }}
          //           values={{ element: rowData.id }}
          //         />
          //       ),
          //       header: t('deleteConfirmation'),
          //       icon: START_ICON_LIGHT + 'triangle-exclamation',
          //       acceptClassName: 'p-button-danger',
          //       closeOnEscape: true,
          //       draggable: false,
          //       acceptLabel: t('delete'),
          //       rejectLabel: t('cancel'),
          //       async accept() {
          //         try {
          //           toast.loading(
          //             t('deleteElementWait', {
          //               element: t('discount').toLowerCase(),
          //             }),
          //             {
          //               duration: 3000000,
          //             }
          //           )
          //           await mutateAsyncDeleteDiscountCodeCompany(rowData.id)
          //         } catch (error) {
          //           toast.dismiss()
          //           toast.error(t('unknownError'), { duration: 5000 })
          //         } finally {
          //           toast.dismiss()
          //         }
          //       },
          //     })
          //   }
        >
          <i className={`${START_ICON_LIGHT}trash-can text-xl`}></i>
        </span>
      </div>
    )
  }

  const { mutateAsync: mutateAsyncUpdateStatusPointMonitoring } = useMutation({
    mutationFn: mutationFetchUpdateStatusPointMonitoring,
    onSuccess: (res) => {
      if (res.status === 200) {
        toast.success(res.data.message, { duration: res.data.timeout ?? 4000 })
        queryClient.invalidateQueries({ queryKey: ['pointMonitoring'] })
      } else {
        toast.error(res.data.message)
      }
    },
    onError: () => {
      toast.error(t('unknownError'))
    },
  })

  return (
    <>
      <DataTable
        value={pointMonitoringTable}
        stripedRows
        dataKey="id"
        className="w-full mt-2"
        scrollable
        paginator
        showGridlines
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
      >
        <Column
          field="name"
          header={t('lbName')}
          style={{ minWidth: '8rem' }}
          align="center"
        ></Column>
        <Column
          field="ubication"
          header={t('lbUbication')}
          align="center"
          style={{ minWidth: '8rem' }}
        ></Column>
        <Column
          field="length"
          header={t('lbLongitude')}
          align="center"
          style={{ minWidth: '8rem' }}
        ></Column>
        <Column
          field="latitude"
          header={t('lbLatitude')}
          align="center"
          style={{ minWidth: '8rem' }}
        ></Column>
        <Column
          field="temperature"
          header={t('lbTemperature')}
          align="center"
          style={{ minWidth: '8rem' }}
        ></Column>
        <Column
          field="date_register"
          header={t('lbDateRegister')}
          align="center"
          style={{ minWidth: '8rem' }}
        ></Column>
        <Column
          field="date_updated"
          body={dateBodyTemplateLastUpdated}

          header={t('lbDateUpdate')}
          align="center"
          style={{ minWidth: '8rem' }}
        ></Column>
        <Column
          field="status"
          header={t('lbStatus')}
          body={statusBodyTemplate}
          align="center"
          style={{ minWidth: '8rem' }}
        ></Column>
        <Column
          className="item-center"
          header={t('actions')}
          body={actionsBody}
          alignFrozen="right"
          frozen
        />
      </DataTable>
      {isShowCreateSidebar && (
        <Sidebar
          padding="0px"
          setVisible={setIsShowCreateSidebar}
          header={
            <Trans
              i18nKey="newElement"
              values={{ element: editPointMonitoring.id }}
              components={{ span: <span /> }}
            />
          }
          visible={isShowCreateSidebar}
          component="new-point-monitoring"
          width="400px"
        />
      )}
    </>
  )
}

export default PointMonitoringTable