import { I18n } from 'i18n'
import path from 'path'

const i18n = new I18n()

i18n.configure({
  locales: ['en', 'es'], // Idiomas soportados
  directory: path.join(__dirname, 'locales'), // Directorio donde estarán los archivos de traducción
  defaultLocale: 'es', // Idioma por defecto
  objectNotation: true, // Permite la notación de objetos en las traducciones
  cookie: 'locale', // Cookie donde se guardará el idioma seleccionado
})

export default i18n
