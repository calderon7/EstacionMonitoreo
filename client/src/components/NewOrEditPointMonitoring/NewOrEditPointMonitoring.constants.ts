import { IFormStructure } from '../AuthForm/AuthForm.interface'
import { ICreateOrEditPointMonitoring } from './NewOrEditPointMonitoring.interface'
// import * as Yup from 'yup'

export const INITIAL_VALUES_CREATE_OR_EDIT_POINT_MONITORING: ICreateOrEditPointMonitoring =
  {
    id: undefined,
    name: '',
    ubication: '',
    length: '',
    latitude: '',
    temperature: undefined,
    status: 1,
  }

export const STRUCTURE_INFORMATION_CREATE_OR_EDIT_POINT_MONITORING: IFormStructure[] = [
  {
    elementType: 'input-text',
    name: 'name',
    label: 'lbName',
    maxCharacter: 20,
    required: true,
    visibleRequired: true,
    textRequired: 'nameRequired',
    placeholder: 'plName',
    iconField: {
      icon: 'shuffle',
      cursor: 'pointer',
      iconPosition: 'right',
      title: 'generateRandomCode',
      isVisibleByDefault: true,
      actionToClick: 'generateRandomElement',
      maxCharacter: 10,
      typeCode: 'string',
    },
  },
  {
    elementType: 'input-text',
    name: 'ubication',
    label: 'lbUbication',
    maxCharacter: 20,
    required: true,
    visibleRequired: true,
    textRequired: 'ubicationRequired',
    placeholder: 'plUbication',
    iconField: {
      icon: 'shuffle',
      cursor: 'pointer',
      iconPosition: 'right',
      title: 'generateRandomCode',
      isVisibleByDefault: true,
      actionToClick: 'generateRandomElement',
      maxCharacter: 10,
      typeCode: 'string',
    },
  },
  {
    elementType: 'input-text',
    name: 'length',
    label: 'lbLongitude',
    required: true,
    visibleRequired: true,
    textRequired: 'longitudeRequired',
    placeholder: 'plLongitude',
  },
  {
    elementType: 'input-text',
    name: 'latitude',
    label: 'lbLatitude',
    required: true,
    visibleRequired: true,
    textRequired: 'latitudeRequired',
    placeholder: 'plLatitude',
  },
  {
    elementType: 'input-number',
    name: 'temperature',
    label: 'lbTemperature',
    required: true,
    visibleRequired: true,
    textRequired: 'temperatureRequired',
    placeholder: 'plTemperature',
  },
]
