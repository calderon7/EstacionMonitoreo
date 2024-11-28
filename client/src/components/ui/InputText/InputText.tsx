import { t } from 'i18next'
import { classNames } from 'primereact/utils'
import { IBasicProps } from '../../AuthForm/AuthForm.interface'
import { ContainerInputText } from '../../../Global'

function InputText({ formik, element, isFormFieldInvalid }: IBasicProps) {

  return (
    <ContainerInputText
      $grouped={element.grouped?.direction}
      type={element.iconField?.textType}
      $borderRadius={element?.borderRadius}
      $height={element?.height}
      v-model={element.name}
      minLength={element.minCharacter}
      maxLength={element.maxCharacter}
      placeholder={t(element.placeholder ?? '')}
      id={element.name}
      name={element.name}
      disabled={element.isDisabled}
      keyfilter={element.keyfilter}
      onChange={async (e:any) => {
        const value = e.target.value

        element.iconField?.showOrHideIcon &&
          element.iconField.showOrHideIcon(value.length > 0 ? true : false)
        element.iconField?.changeIcon && element.iconField.changeIcon(value)
        formik.setFieldValue(element.name, value)
      }}
      className={classNames({
        'p-invalid': isFormFieldInvalid && isFormFieldInvalid(element.name),
      })}
      style={{ width: element.width ?? '100%' }}
      value={
        element?.otherItemNameValue &&
        typeof formik.values[element.name] === 'object'
          ? formik.values[element.name]?.[element?.otherItemNameValue ?? '']
          : element?.valueElement
          ? element.valueElement
          : formik.values[element.name]
      }
    />
  )
}

export default InputText
