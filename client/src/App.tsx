import 'primeflex/primeflex.css'
import 'primeflex/themes/primeone-dark.css'
import 'primeflex/themes/primeone-light.css'
import Routes from './components/Routes/Routes'
import { DARK_THEME, LIGHT_THEME, Styles, themeStore } from './Global'
import { ThemeProvider } from 'styled-components'

function App() {
  const { theme } = themeStore()

  return (
    <ThemeProvider theme={theme === 'light' ? LIGHT_THEME : DARK_THEME}>
      <Styles />
      <Routes />
    </ThemeProvider>
  )
}

export default App
