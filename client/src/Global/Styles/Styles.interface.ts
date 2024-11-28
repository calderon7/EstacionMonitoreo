import {
    TBorderStyle,
    TBoxShadow,
    TCursor,
    TDirection,
    TOrientation,
    TUnitMeasure,
  } from '../../components/StructureForm/StructureForm.interface'
  import { TColorTheme } from '../Theme'
  
  export interface IPropsContainerInput {
    $grouped?: TDirection
    $width?: string
    $isRequired?: boolean
    $borderRadius?: string
    $noBorder?: TNoBorder
    $height?: string
    $resizeOnly?: TOrientation
    $minHeight?: string
    $maxHeight?: string
    $minWidth?: string
    $maxWidth?: string
  }
  
  export interface IPropsContainerInputIcon {
    $spinner: TSpinner
    $color?: TColorTheme
    $fontSize?: number
    $unitMeasure?: TUnitMeasure
    $cursor?: TCursor
  }
  
  export interface IPropsContainerIcon {
    $fontSize?: number
    $unitMeasure?: TUnitMeasure
    $isPointer?: boolean
  }
  
  export interface IPropsContainerButton {
    $width?: number
    $unitMeasure?: TUnitMeasure
    $backgroundColor?: TColorTheme
    $borderRadius?: string
    $borderWidth?: string
    $borderStyle?: TBorderStyle
    $borderColor?: TColorTheme
    $boxShadow?: TBoxShadow | string
    $boxShadowColor?: TColorTheme
    $color?: TColorTheme
  }
  
  export interface IPropsContainerSpanRedirect {
    $color?: TColorTheme
    $fontSize?: number
    $measure?: TUnitMeasure
    $isRedirect?: true
    $hoverColor?: TColorTheme
  }
  
  export interface IPropsDropdown {
    $widthDropdown?: string
    $svgWidthHeight?: string
    $noBorder?: TNoBorder
    $isIconField?: boolean
    $isInputMask?: boolean
    $borderRadius?: string
    $borderWidth?: string
    $width?: string
  }
  export interface IPropsContainerStep {
    $isActive: boolean
  }
  
  export interface IPropsColorRequirementsPassword {
    $isComplete: boolean
  }
  
  export interface IPropsContainerMessageInformation {
    $backgroundColor?: TColorTheme
    $textColor?: TColorTheme
    $borderColor?: TColorTheme
  }
  
  export interface IPropsContainerSection {
    $padding?: string
    $borderRadius?: string
    $width?: string
    $height?: string
  }
  
  export interface IPropsContainerNewTitle {
    $color?: TColorTheme
    $fontSize?: string
    $fontWeight?: number
    $alignItem?: TAlignItem
  }
  
  export interface IPropsContainerTooltip {
    $padding?: string
    $backgroundColor?: TColorTheme
    $textColor?: TColorTheme
    $borderRadius?: string
  }
  
  export type TAlignItem = 'left' | 'center' | 'right'
  
  export interface IPropsContainerDialog {
    $width?: string
    $justifyContent?: TJustifyContent
    $padding?: string
    $borderRadius?: string
    $paddingHeader?: string
  }
  
  export interface IPropsContainerProgressBar {
    $justifyContentText?: TJustifyContent
    $padding?: string
  }
  
  export interface IPropContainerSidebar {
    $padding?: string
  }
  
  export type TSpinner = 'spin 4s infinite linear' | ''
  
  export type TNoBorder = 'left' | 'right'
  
  export type TJustifyContent = 'flex-end' | 'flex-start'
  