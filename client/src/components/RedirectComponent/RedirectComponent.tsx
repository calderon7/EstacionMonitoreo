import { t } from 'i18next'
import { IBasicProps } from '../AuthForm/AuthForm.interface'
import { START_ICON_LIGHT, START_ICON_SOLID } from '../../Global'
import { OverlayPanel } from 'primereact/overlaypanel'
import { useRef } from 'react'
import InputText from '../ui/InputText/InputText'
import InputNumber from '../ui/InputNumber/InputNumber'

function RedirectComponent({
  element,
  isFormFieldInvalid,
  formik,
  status,
}: IBasicProps) {
  const addMessageRef = useRef<any>(null)
  return (
    <>
      {element.label && (
        <div className="flex align-items-center justify-content-between mb-1">
          <div className="w-full flex flex-row align-content-center justify-content-between">
            <div className="flex align-content-center gap-1">
              <label htmlFor={element.name}>{t(element.label)}</label>
              {element.visibleRequired && <span className="required"> *</span>}
            </div>
            {element.validationRequirement?.isValidation && status !== 3 && (
              <i
                className={`${
                  !!formik.values[element.validationRequirement.name]
                    ? START_ICON_SOLID
                    : START_ICON_LIGHT
                }message-exclamation cursor-pointer ${
                  !!formik.values[element.validationRequirement.name] && 'error'
                }`}
                style={{ fontSize: 17 }}
                title={t('AddObservation')}
                onClick={(e) =>
                  addMessageRef.current && addMessageRef.current.toggle(e)
                }
              />
            )}
          </div>
        </div>
      )}

      {(() => {
        switch (element?.elementType) {
          case 'input-text':
            return (
              <InputText
                element={element}
                isFormFieldInvalid={isFormFieldInvalid}
                noBorder={element.grouped?.direction}
                formik={formik}
              />
            )
          case 'input-number':
            return (
              <InputNumber
                element={element}
                isFormFieldInvalid={isFormFieldInvalid}
                noBorder={element.grouped?.direction}
                formik={formik}
              />
            )
          default:
            return null
        }
      })()}
    </>
  )
}

export default RedirectComponent
