import { t } from "i18next"
import { TFormatTypeDate } from "./utils.interface"

export function convertDateToString(date: Date | null) {
  if (!date) {
    return null
  }

  if (isNaN(date.getTime())) {
    return null
  }

  const año = date.getFullYear()
  const mes = ('0' + (date.getMonth() + 1)).slice(-2)
  const día = ('0' + date.getDate()).slice(-2)

  return `${año}-${mes}-${día}`
}

export function formatDate(
  value: Date,
  formatType: TFormatTypeDate = 'yyyy-mm-dd'
) {
  const year = value.getFullYear()
  const month = ('0' + (value.getMonth() + 1)).slice(-2)
  const day = ('0' + value.getDate()).slice(-2)
  const hours = value.getHours()
  const minutes = ('0' + value.getMinutes()).slice(-2)
  const seconds = ('0' + value.getSeconds()).slice(-2)

  const daysOfWeek: any = t('primereact.dayNames', { returnObjects: true })
  const monthsOfYear: any = t('primereact.monthNames', {
    returnObjects: true,
  })

  const dayOfWeek = daysOfWeek[value.getDay()]
  const monthName = monthsOfYear[value.getMonth()]

  const hours12 = hours % 12 || 12
  const ampm = hours >= 12 ? 'PM' : 'AM'

  const formattedHours = ('0' + hours12).slice(-2)

  switch (formatType) {
    case 'yyyy-mm-dd':
      return `${year}-${month}-${day}`

    case 'yyyy-mm-dd hh:mm:ss':
      return `${year}-${month}-${day} ${('0' + hours).slice(
        -2
      )}:${minutes}:${seconds}`

    case 'yyyy-mm-dd hh:mm:ss AM/PM':
      return `${year}-${month}-${day} ${formattedHours}:${minutes}:${seconds} ${ampm}`

    case 'dddd dd de mmmm del yyyy':
      return `${dayOfWeek}, ${value.getDate()} ${monthName}, ${year}`

    case 'dddd dd de mmmm del yyyy HH:mm:ss':
      return `${dayOfWeek}, ${value.getDate()} ${monthName}, ${year} - ${hours}:${minutes}:${seconds}`

    case 'dddd dd de mmmm del yyyy hh:mm:ss AM/PM':
      return `${dayOfWeek}, ${value.getDate()} ${monthName}, ${year} - ${formattedHours}:${minutes}:${seconds} ${ampm}`

    default:
      return ''
  }
}

export function getSeverityName(status: number) {
  switch (status) {
    case 1:
      return t('active')

    case 0:
      return t('inactive')

    default:
      return null
  }
}