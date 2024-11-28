import {
  IPostPointMonitoring,
  IPutStatus,
} from '../controllers/point.monitoring.interface'
import { AppDataSource } from '../config/data-source'
import { PuntoMonitoreo } from '../database/PuntoMonitoreo'
import { info } from 'console'

export async function postPointMonitoringModel(
  pointMonitoring: IPostPointMonitoring
) {
  const userRepository = AppDataSource.getRepository(PuntoMonitoreo)
  try {
    const newPointMonitor = userRepository.create(pointMonitoring)

    return await userRepository.save(newPointMonitor)
  } catch (error) {
    console.error('Error en postPointMonitoringModel:', error)
    return false
  }
}

export async function getPointMonitoringModel() {
  const userRepository = AppDataSource.getRepository(PuntoMonitoreo)
  try {
    const infoMonitoringModel = userRepository.find()
    return infoMonitoringModel
  } catch (error) {
    console.error('Error en postPointMonitoringModel:', error)
    return false
  }
}

export async function putStatusPointMonitoringModel(
  statusPointMonitoring: IPutStatus
) {
  // console.log('registro:', statusPointMonitoring);
  const userRepository = AppDataSource.getRepository(PuntoMonitoreo)
  try {
    const registro = await userRepository.findOneBy({
      id: statusPointMonitoring.id,
    })

    if (!registro) return false
    
    
    registro.status = Number(statusPointMonitoring.status)

    await userRepository.save(registro);

    return true

  } catch (error) {
    console.error('Error en postPointMonitoringModel:', error)
    return false
  }
}


export async function updatePointMonitoringModel(
  id: number,
  pointMonitoring: Partial<IPostPointMonitoring> // Datos opcionales a actualizar
) {
  const userRepository = AppDataSource.getRepository(PuntoMonitoreo);
  try {
    // Verificar si el registro existe
    const existingPointMonitoring = await userRepository.findOneBy({ id });

    if (!existingPointMonitoring) {
      return null;
    }

    userRepository.merge(existingPointMonitoring, pointMonitoring);

    return await userRepository.save(existingPointMonitoring);
  } catch (error) {
    console.error('Error en updatePointMonitoringModel:', error);
    throw error;
  }
}

export async function deletePointMonitoringModel(id: string) {
  const userRepository = AppDataSource.getRepository(PuntoMonitoreo);
  
  try {
    const deleteResult = await userRepository.delete(id);

    return deleteResult.affected && deleteResult.affected > 0;
  } catch (error) {
    console.error('Error en deletePointMonitoringModel:', error);
    throw error;
  }
}
