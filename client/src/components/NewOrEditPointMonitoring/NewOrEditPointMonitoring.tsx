import { useMutation } from '@tanstack/react-query'
import { useFormik } from 'formik'
import { t } from 'i18next'
import { Button } from 'primereact/button'
import { toast } from 'sonner'
import React, { useEffect, useState } from 'react'
import { START_ICON_LIGHT } from '../../Global'
import {
  mutationFetchNewPointMonitoring,
  mutationFetchUpdatePointMonitoring,
} from '../../hooks/main/pointMonitoring/usePointMonitoring'
import queryClient from '../../queryClient'
import { IFormStructure } from '../AuthForm/AuthForm.interface'
import RedirectComponent from '../RedirectComponent/RedirectComponent'
import {
  INITIAL_VALUES_CREATE_OR_EDIT_POINT_MONITORING,
  STRUCTURE_INFORMATION_CREATE_OR_EDIT_POINT_MONITORING,
} from './NewOrEditPointMonitoring.constants'
import {
  ICreateOrEditPointMonitoring,
  IPropsNewOrEditPointMonitoring,
  TCreateOrEditPointMonitoring,
} from './NewOrEditPointMonitoring.interface'
import { GlobalStore } from '../../store'

function NewPointMonitoring({ setVisible }: IPropsNewOrEditPointMonitoring) {
  const [initialValuesPointMonitoring, setInitialValuesPointMonitoring] =
    useState<ICreateOrEditPointMonitoring>(
      INITIAL_VALUES_CREATE_OR_EDIT_POINT_MONITORING
    )

  const { editPointMonitoring } = GlobalStore()

  useEffect(() => {
    if (editPointMonitoring !== null) {
      const newInitialValues: ICreateOrEditPointMonitoring = {
        id: editPointMonitoring.id,
        name: editPointMonitoring.name,
        ubication: editPointMonitoring.ubication,
        length: editPointMonitoring.length,
        latitude: editPointMonitoring.latitude,
        temperature: editPointMonitoring.temperature,
        status: editPointMonitoring.status,
      }

      setInitialValuesPointMonitoring(newInitialValues)
    }
  }, [editPointMonitoring])

  const [
    structureInformationCreateOrEditPointMonitoring,
    setStructureInformationCreateOrEditPointMonitoring,
  ] = useState(STRUCTURE_INFORMATION_CREATE_OR_EDIT_POINT_MONITORING)

  const formik = useFormik({
    initialValues: initialValuesPointMonitoring,
    enableReinitialize: true,
    validate: (data: ICreateOrEditPointMonitoring) => {
      const errors: Record<string, string> = {}
      structureInformationCreateOrEditPointMonitoring.forEach(
        (element: IFormStructure) => {
          if (
            element.required &&
            !data[element.name as unknown as TCreateOrEditPointMonitoring]
          ) {
            errors[element.name] = t(element.textRequired ?? 'elementRequired')
          }

          if (
            !!data[element.name as unknown as TCreateOrEditPointMonitoring] &&
            element.grouped &&
            element.grouped.isRequired
          ) {
            if (
              !data[
                element.grouped.name as unknown as TCreateOrEditPointMonitoring
              ]
            ) {
              errors[
                element.grouped.name as unknown as TCreateOrEditPointMonitoring
              ] = t(element.grouped.textRequired ?? 'elementRequired')
            }
          }
        }
      )
      return errors
    },
    onSubmit: async (data: ICreateOrEditPointMonitoring) => {
      try {
        if (editPointMonitoring !== null) {
          toast.loading(t('updateInformation'), {
            duration: 3000000,
          })
          await mutateAsyncUpdatePointMonitoring({
            ...data,
            id: editPointMonitoring.id,
          })
        } else {
          toast.loading(t('creatingDiscount'), {
            duration: 3000000,
          })
          await mutateAsyncNewPointMonitoring(data)
        }
      } catch (error) {
        toast.dismiss()
        toast.error(t('unknownError'), { duration: 5000 })
      } finally {
        toast.dismiss()
      }
    },
  })

  const isFormFieldInvalid = (name: TCreateOrEditPointMonitoring) =>
    !!(formik.touched[name] && formik.errors[name])

  const getFormErrorMessage = (name: TCreateOrEditPointMonitoring) => {
    return isFormFieldInvalid(name) ? (
      <small className="p-error">{formik.errors[name] as unknown as any}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    )
  }

  const {
    mutateAsync: mutateAsyncUpdatePointMonitoring,
    isPending: isLoadingUpdatePointMonitoring,
  } = useMutation({
    mutationFn: mutationFetchUpdatePointMonitoring,
    onSuccess: (res) => {
      if (res.status === 200) {
        toast.success(res.data.message, { duration: res.data.timeout ?? 4000 })
        queryClient.invalidateQueries({ queryKey: ['pointMonitoring'] })
        setVisible(false)
      } else {
        toast.error(res.data.message)
      }
    },
    onError: () => {
      toast.error(t('unknownError'))
    },
  })

  const { mutateAsync: mutateAsyncNewPointMonitoring } = useMutation({
    mutationFn: mutationFetchNewPointMonitoring,
    onSuccess: (res) => {
      if (res.status === 200) {
        toast.success(res.data.message, { duration: res.data.timeout ?? 4000 })
        queryClient.invalidateQueries({ queryKey: ['pointMonitoring'] })
        setVisible(false)
      } else {
        toast.error(res.data.message)
      }
    },
    onError: () => {
      toast.error(t('unknownError'))
    },
  })

  return (
    <div className="h-full w-full">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-column justify-content-between h-full"
      >
        <div className="overflow-y-auto p-3" style={{ height: '95%' }}>
          {structureInformationCreateOrEditPointMonitoring &&
            structureInformationCreateOrEditPointMonitoring.map(
              (element: IFormStructure, key: number) => {
                const isDependentVisible =
                  element.dependedTo &&
                  formik.values[
                    element.dependedTo as unknown as TCreateOrEditPointMonitoring
                  ]

                if (isDependentVisible || !element.dependedTo) {
                  return (
                    <div
                      key={key}
                      className={`field col-${element.colMed ?? 12} lg:col-${
                        element.colMax ?? 12
                      } mb-0 px-0`}
                    >
                      <RedirectComponent
                        element={element}
                        formik={formik}
                        isFormFieldInvalid={isFormFieldInvalid}
                      />
                      <span className="error">
                        {getFormErrorMessage(
                          element.name as unknown as TCreateOrEditPointMonitoring
                        )}
                      </span>
                      {element.grouped?.name && (
                        <span className="error">
                          {getFormErrorMessage(
                            element.grouped
                              .name as unknown as TCreateOrEditPointMonitoring
                          )}
                        </span>
                      )}
                    </div>
                  )
                }
              }
            )}
        </div>
        <div className="footer-buttons-sidebar">
          <Button
            type="button"
            label={t('cancel')}
            style={{ backgroundColor: 'transparent' }}
            onClick={() => setVisible(false)}
            outlined
          />
          <Button
            label={t('save')}
            loading={isLoadingUpdatePointMonitoring}
            className="button gap-0 py-1 px-2 border-round"
            type="submit"
            icon={`${START_ICON_LIGHT}floppy-disk`}
          />
        </div>
      </form>
    </div>
  )
}

export default NewPointMonitoring
