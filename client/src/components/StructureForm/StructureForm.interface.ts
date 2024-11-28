import { TColorTheme } from '../../Global'

export interface IPropsAuth {
  content: IAuthContent
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
  dependenTo?: string
  dependedToValue?: any
  isVisibleWhenDepended?: boolean
  elementToDependedValue?: string
  valueElement?: string
  elementTypeToDependedValue?: 'text' | 'object'
  name: string
  otherItemNameValue?: string
  label: string
  required?: true
  textRequired?: string
  isDisabled?: boolean
  isShowToggleMask?: boolean
  visibleRequired?: true
  errorRequired?: string
  isShowSelectClear?: true
  isNeed?: boolean
  colMax?: number
  validationRequirement?: IValidationRequirement
  isIgnoreColumnDefault?: boolean
  colMed?: number
  help?: string
  placeholder?: string
  optionLabel?: string
  options?: any
  width?: string
  isFilter?: boolean
  keyfilter?: TInputTextType
  grouped?: IInputGroup
  borderRadius?: string
  height?: string
  iconField?: IIconField
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
  textareaResizeOnly?: TOrientation
  textareaMinHeight?: string
  textareaMaxHeight?: string
  textareaMinWidth?: string
  textareaMaxWidth?: string
  inputNumberLocale?: string
  inputNumberMinFractionDigits?: number
  inputNumberMode?: TInputMode | any
  inputNumberSuffix?: string
  inputNumberPrefix?: string
  inputNumberCurrency?: any
  IsCalendarShowTime?: boolean
  calendarHourFormat?: '12' | '24'
  calendarTimeOnly?: boolean
  calendarDateFormat?: string
  calendarMinDate?: Date | undefined
  calendarMaxDate?: Date | undefined
  isCalendarShowIcon?: boolean
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
  isDisabled?: boolean
  textRequired?: string
  options?: any
  textContent?: string
  itemTemplate?: string
  itemFooter?: string
  valueTemplate?: string
  svgWidthHeight?: string
  action?: any
  direction: TDirection
  isPointer?: boolean
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

export interface IValidationRequirement {
  isValidation: boolean
  elementType: TElementType
  name: string
  placeholder: string
  isDisabled?: boolean
  textareaAutoResize?: boolean
  textareaRows?: number
  textareaCols?: number
  maxCharacter?: number
  width?: string
  height?: string
  label: string
}

export interface IContent {
  endpoint: string
  entityName?: TTableDatabase
  procedureName?: TStoreProcedureName
}

export type TInputMode = 'currency' | 'decimal'

export type TOrientation = 'vertical' | 'horizontal'

export type TTypeEndpoint = 'post' | 'get' | 'put' | 'delete'

export type TVerification = 'sms' | 'email'

export type TTableDatabase = 'User' | 'Partner' | 'Master' | 'Company'

export type TStoreProcedureName = 'sp_PostPartner' | 'sp_PostMaster'

export type TTypeSectionInformation = 'image'

export type TUnitMeasure = 'px' | 'rem' | 'em' | '%'

export type TAuthForm = 'user' | 'password'

export type TFormType = 'login' | 'reset-password' | 'signup' | 'create-account'

export type TElementType =
  | 'select'
  | 'password'
  | 'input-text'
  | 'input-mask'
  | 'multi-select'
  | 'input-number'
  | 'checkbox'
  | 'input-switch'
  | 'select-button'
  | 'input-search-places'
  | 'textarea'

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
