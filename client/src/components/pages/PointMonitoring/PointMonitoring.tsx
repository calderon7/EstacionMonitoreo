import { Card } from 'primereact/card'
import { START_ICON_DUOTONE, START_ICON_LIGHT } from '../../../Global'
import { TabPanel, TabView } from 'primereact/tabview'
import Sidebar from '../../ui/sidebar/Sidebar'
import { useState } from 'react'
import { t } from 'i18next'
import { Trans } from 'react-i18next'
import PointMonitoringTable from '../../PointMonitoringTable/PointMonitoringTable'

function PointMonitoring() {
  const [isShowCreateSidebar, setIsShowCreateSidebar] = useState(false)
  const [nameFormik, setNameFormik] = useState('')
  const containerTitle: JSX.Element = (
    <div className="flex flex-row justify-content-between">
      <div className="flex align-items-center gap-3">
        <i
          className={
            START_ICON_DUOTONE + 'circle-location-arrow mt-1 text-main-color'
          }
        />
        <span className="text-xl">{t('estationMonitoring')}</span>
      </div>
      <div className="flex gap-2 align-items-center align-content-center">
        <div
          className=" border-button-add-element"
          onClick={() => {
            // setEditDiscountCodeCompany(null)
            setIsShowCreateSidebar(!isShowCreateSidebar)
            setNameFormik('Punto de Monitoreo')
          }}
        >
          <i className={`${START_ICON_LIGHT}plus`}></i>
          <span className="font-normal">{t('new')}</span>
        </div>

        <div
          className={`border-button-delete-element`}
          // onClick={() => {
          //   confirmDialog({
          //     message: (
          //       <Trans
          //         i18nKey="doYouWantDeleteElements"
          //         components={{ strong: <strong /> }}
          //         values={{
          //           quantity: discountsSelected.length,
          //           s: discountsSelected.length > 1 ? 's' : '',
          //         }}
          //       />
          //     ),
          //     header: t('deleteConfirmation'),
          //     icon: START_ICON_LIGHT + 'triangle-exclamation',
          //     acceptClassName: 'p-button-danger',
          //     closeOnEscape: true,
          //     draggable: false,
          //     acceptLabel: t('delete', { element: '' }),
          //     rejectLabel: t('cancel'),
          //     async accept() {
          //       const ids = discountsSelected.map(
          //         (discountSelected: IDiscountCodeCompany) =>
          //           discountSelected.id
          //       )

          //       try {
          //         toast.loading(
          //           <Trans
          //             i18nKey="deletingElementsWait"
          //             values={{
          //               element: t('discounts').toLowerCase(),
          //             }}
          //             components={{ strong: <strong />, span: <span /> }}
          //           />,
          //           {
          //             duration: 3000000,
          //           }
          //         )
          //         await mutateAsyncDeleteDiscountCodeCompanies(ids)
          //       } catch (error) {
          //         toast.dismiss()
          //       }
          //     },
          //   })
          // }}
        >
          <i className={`${START_ICON_LIGHT}trash-can`}></i>
          <span className="font-normal">{t('delete')}</span>
        </div>
      </div>
    </div>
  )

  return (
    <Card title={containerTitle} className="m-3">
      <TabView>
        <TabPanel
          header={t('informationMonitoreo')}
          className="flex gap-1"
          leftIcon={`${START_ICON_LIGHT}table mr-2`}
        >
          <PointMonitoringTable />
          {isShowCreateSidebar && (
            <Sidebar
              padding="0px"
              setVisible={setIsShowCreateSidebar}
              header={
                <Trans
                  i18nKey="newElement"
                  values={{ element: nameFormik }}
                  components={{ span: <span /> }}
                />
              }
              visible={isShowCreateSidebar}
              component="new-point-monitoring"
              width="400px"
            />
          )}
        </TabPanel>
        <TabPanel
          header={t('mapsMonitoreo')}
          className="flex gap-1"
          leftIcon={`${START_ICON_LIGHT}map mr-2`}
        ></TabPanel>
      </TabView>
    </Card>
  )
}
export default PointMonitoring
