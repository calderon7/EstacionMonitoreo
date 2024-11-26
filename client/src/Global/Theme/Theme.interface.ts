export interface ITheme {
    mainColor: string
    backgroundColor: string
    containerColor: string
    borderLightColor: string
    textColor: string
    borderColor: string
    redColor: string
    lightRedColor: string
    whiteColor: string
    blackColor: string
    grayColor: string
    greenColor: string
    lightGreenColor: string
    blueColor: string
    successColor: string
    borderComponentsColor: string
    colorPlaceholder: string
    disabledColor: string
    errorMessageInformationColor: string
    warningMessageInformationColor: string
    infoMessageInformationColor: string
    successMessageInformationColor: string
    contrastMessageInformationColor: string
    inputBackgroundColor: string
    ratingColor: string
    svgColor: string
    lightMainColor: string
    mainColorTransparent: string
    backgroundHeaderTable: string
    pendingVerificationColor: string
    approvedVerificationColor: string
    rejectedVerificationColor: string
    reassignedVerificationColor: string
  }
  
  export type TColorTheme =
    | 'mainColor'
    | 'backgroundColor'
    | 'containerColor'
    | 'borderLightColor'
    | 'textColor'
    | 'borderColor'
    | 'redColor'
    | 'lightRedColor'
    | 'whiteColor'
    | 'blackColor'
    | 'grayColor'
    | 'greenColor'
    | 'lightGreenColor'
    | 'blueColor'
    | 'successColor'
    | 'borderComponentsColor'
    | 'colorPlaceholder'
    | 'disabledColor'
    | 'errorMessageInformationColor'
    | 'warningMessageInformationColor'
    | 'infoMessageInformationColor'
    | 'successMessageInformationColor'
    | 'contrastMessageInformationColor'
    | 'ratingColor'
    | 'svgColor'
    | 'lightMainColor'
    | 'mainColorTransparent'
    | 'backgroundHeaderTable'
    | 'pendingVerificationColor'
    | 'approvedVerificationColor'
    | 'rejectedVerificationColor'
    | 'reassignedVerificationColor'
  
  export type TTheme = 'dark' | 'light'
  
  export const THEME_TYPES = {
    dark: 'Oscuro',
    light: 'Claro',
  }
  