import { TColorTheme } from '../../Global'
import { TTypeEndpoint } from '../../hooks/services.interface'

export interface IPropsAuth {
  content: IAuthContent
}

export interface IBasicProps {
    formik: any
    element: IFormStructure | IValidationRequirement | any
    isFormFieldInvalid?: any
    noBorder?: any
    status?: number
  }

export interface IAuthContent {
  formType: TFormType
  validateCodeInformation?: IValidationCodeSms
  startTile?: string
  secondTile?: string
  helpInformation?: string
  form: IAuthForm
  formStructure: IFormStructure[]
  entityName?: TTableDatabase
  procedureName?: TStoreProcedureName
  endpoint: any
  formButton: IFormButton
  sectionInformation?: ISectionInformation
  [key: string]: IRedirect | any
}

export interface IFormStructure {
  elementType: TElementType
  dependedTo?: string
  dependedToValue?: any
  isVisibleWhenDepended?: boolean
  elementToDependedValue?: string
  isInputMask?: boolean
  valueElement?: string
  elementTypeToDependedValue?: 'text' | 'object'
  labelInputSwitch?: string
  name: string
  otherItemNameValue?: string
  label: string
  required?: true
  textRequired?: string
  isDisabled?: boolean
  visibleRequired?: true
  errorRequired?: string
  isShowSelectClear?: true
  isNeed?: boolean
  colMax?: number
  isIgnoreColumnDefault?: boolean
  colMed?: number
  help?: string
  placeholder?: string
  optionLabel?: string
  options?: ISelectPlanDuration[] | any
  width?: string
  isFilter?: boolean
  keyfilter?: TInputTextType
  grouped?: IInputGroup
  borderRadius?: string
  height?: string
  iconField?: IIconField
  validationRequirement?: IValidationRequirement
  textContent?: string
  maxSelected?: number
  itemTemplate?: string
  isRequirementsMetPassword?: true
  itemFooter?: string
  valueTemplate?: string
  passwordFeedback?: boolean
  isPasswordHeader?: true
  isPasswordFooter?: true
  redirect?: IRedirect
  minCharacter?: number
  maxCharacter?: number
  textareaCols?: number
  textareaRows?: number
  textareaAutoResize?: true
  textareaMinHeight?: string
  textareaMaxHeight?: string
  textareaMinWidth?: string
  textareaMaxWidth?: string
  inputNumberLocale?: string
  textareaResizeOnly?: TOrientation
  inputNumberMinFractionDigits?: number
  inputNumberMode?: TInputMode | any
  inputNumberSuffix?: string
  inputNumberPrefix?: string
  inputNumberCurrency?: any
  IsCalendarShowTime?: boolean
  calendarRange?: 'single' | 'multiple' | 'range'
  isCalendarShowButtonBar?: boolean
  calendarHourFormat?: '12' | '24'
  calendarTimeOnly?: boolean
  calendarDateFormat?: string
  calendarMinDate?: Date | undefined
  calendarMaxDate?: Date | undefined
  isCalendarShowIcon?: boolean
  multiselectDisplay?: 'chip' | 'comma'
  multiselectSelectionLimit?: number
  customElementClickableText?: ICustomElementClickableText
  customElementIsCurrency?: true

}

export interface IInputGroup {
  type: TInputGroup
  name?: string
  icon?: string
  widthDropdown?: string
  fontSize?: number
  unitMeasure?: TUnitMeasure
  placeholder?: string
  optionLabel?: string
  isFilter?: boolean
  isRequired?: true
  textRequired?: string
  options?: any
  textContent?: string
  isDisabled?: boolean
  itemTemplate?: string
  itemFooter?: string
  valueTemplate?: string
  svgWidthHeight?: string
  action?: any
  direction: TDirection
  isPointer?: boolean
  borderWidth?: string
  borderRadius?: string
  [key: string]: ((...args: any[]) => any) | any
}

export interface IIconField {
  iconPosition?: TDirection
  isImage?: boolean
  image?: any
  icon: string
  iconColor?: TColorTheme
  fontSize?: number
  actionToClick?: 'open-modal' | 'search-address' | any
  unitMeasure?: TUnitMeasure
  itemNameToAdd?: string
  isVisibleByDefault?: boolean
  isVisibleWhenTyping?: boolean
  isLoading?: boolean
  cursor?: TCursor
  textType?: TTextType
  validateIndDatabase?: IValidateInDatabase
  [key: string]: ((...args: any[]) => any) | any
}

export interface IValidateInDatabase {
  entityName?: TTableDatabase
  valueToValidate: string
  minCharacterSearch: number
  errorText?: string
}

export interface IAuthForm {
  user?: string
  password?: string
  document?: string
  email?: string
  phone?: string
  name?: string
  surname?: string
  entityName?: TTableDatabase
  [key: string]: any
}

export interface IFormButton {
  label: string
  borderRadius?: string
  borderWidth?: string
  borderStyle?: TBorderStyle
  borderColor?: TColorTheme
  boxShadow?: TBoxShadow | string
  boxShadowColor?: TColorTheme
  width?: number
  unitMeasure?: TUnitMeasure
  backgroundColor?: TColorTheme
  textColor?: TColorTheme
  type: TButtonType
  isIconLoadingClicked?: true
  icon?: string
}

export interface ISectionInformation {
  width?: number
  minWidth?: number
  type: TTypeSectionInformation
  image: string
  alt?: string
}

export interface IRedirect {
  isNewPage?: true
  isRedirect?: true
  text: string
  color?: TColorTheme
  fontSize?: number
  measure?: TUnitMeasure
  hoverColor?: TColorTheme
  redirectTo: string
  justifyContent?: TJustifyContent
}

export interface IValidationCodeSms {
  verificationType: TVerification
  endpoint: string
  type: TTypeEndpoint
  newCode: number
  lengthCode: number
  body: any
  initialValues: any
}

export interface IPropsCallFetch {
  content: IContent
  data: IAuthForm | any
}

export interface IContent {
  endpoint: string
  entityName?: TTableDatabase
  procedureName?: TStoreProcedureName
}

export interface IValidationRequirement {
  isValidation: boolean
  elementType: TElementType
  name: string
  placeholder: string
  isDisabled?: boolean
  isImproveText?: boolean
  textareaAutoResize?: boolean
  textareaRows?: number
  textareaCols?: number
  maxCharacter?: number
  width?: string
  height?: string
  label: string
}

export interface ISelectPlanDuration {
  id: number
  months: number
  name: string
  discount?: number
  price: number
  discountType?: TDiscountType
}

export interface ICustomElementClickableText {
  text: string
  noData?: string
  openItem: TCustomElementClickableText
  functionName: string
}

export type TCustomElementClickableText = 'new-page' | 'input-element'

export type TDiscountType = 'percentage' | 'money'

export type TOrientation = 'vertical' | 'horizontal'

export type TVerification = 'sms' | 'email'

export type TTableDatabase = 'User' | 'Partner' | 'Master' | 'Company'

export type TStoreProcedureName = 'sp_PostPartner' | 'sp_PostMaster'

export type TTypeSectionInformation = 'image'

export type TUnitMeasure = 'px' | 'rem' | 'em' | '%'

export type TAuthForm = 'user' | 'password'

export type TFormType = 'login' | 'reset-password' | 'signup' | 'create-account'

export type TInputMode = 'currency' | 'decimal'

export type TElementType =
  | 'select'
  | 'password'
  | 'input-text'
  | 'input-mask'
  | 'multi-select'
  | 'checkbox'
  | 'input-switch'
  | 'select-button'
  | 'input-search-places'
  | 'textarea'
  | 'input-number'
  | 'calendar'
  | 'select-plan-duration'
  | 'custom-element'

export type TInputTextType =
  | 'int'
  | 'num'
  | 'money'
  | 'email'
  | 'alpha'
  | 'alphanum'

export type TInputGroup =
  | 'icon'
  | 'multi-checkbox'
  | 'checkbox'
  | 'button'
  | 'dropdown'

export type TDirection = 'left' | 'right'

export type TCursor = 'pointer'

export type TTextType = 'text' | 'password'

export type TButtonType = 'submit'

export type TBorderStyle = 'border' | 'dashed' | 'dotted' | 'double'

export type TBoxShadow = '2px 4px 5px 0.4px'

export type TJustifyContent = 'center' | 'end' | 'start'
