import { useMutation } from '@tanstack/react-query'
import { t } from 'i18next'
import { InputNumberValueChangeEvent } from 'primereact/inputnumber'
import { classNames } from 'primereact/utils'
import { IBasicProps } from '../../AuthForm/AuthForm.interface'
import { ContainerInputNumber } from '../../../Global'

function InputNumber({
  formik,
  element,
  noBorder,
  isFormFieldInvalid,
}: IBasicProps) {

  return (
    <ContainerInputNumber
      $grouped={element.grouped?.direction}
      type={element.iconField?.textType}
      $noBorder={noBorder}
      $borderRadius={element?.borderRadius}
      $height={element?.height}
      id={element.name}
      name={element.name}
      v-model={element.name}
      placeholder={t(element.placeholder ?? '')}
      value={formik.values[element.name] ?? ''}
      disabled={element.isDisabled}
      onValueChange={async (e: InputNumberValueChangeEvent) => {
        const value = e.value
        element.iconField?.changeIcon && element.iconField.changeIcon(value)
        formik.setFieldValue(element.name, value)
      }}
      useGrouping={false}
      className={classNames({
        'p-invalid': isFormFieldInvalid(element.name),
      })}
      suffix={element.inputNumberSuffix}
      prefix={element.inputNumberPrefix}
      currency={element?.inputNumberCurrency ?? undefined}
      mode={
        element?.inputNumberMode
          ? (element?.inputNumberMode as unknown as any)
          : undefined
      }
      locale="de-DE"
      minFractionDigits={element.inputNumberMinFractionDigits}
    />
  )
}

export default InputNumber
