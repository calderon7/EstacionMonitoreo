export interface IPropsSidebar {
  padding?: string
  visible: boolean
  setVisible: (value: boolean) => void
  isCloseOnScape?: boolean
  header?: JSX.Element | string
  children?: JSX.Element | JSX.Element[]
  component?: ISidebarComponent
  width?: string
}

export type ISidebarComponent = 'new-point-monitoring'
