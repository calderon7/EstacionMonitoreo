import { Request, Response } from 'express';
import { deletePointMonitoringModel, getPointMonitoringModel, postPointMonitoringModel, putStatusPointMonitoringModel, updatePointMonitoringModel } from '../models';
import { IPostPointMonitoring } from './point.monitoring.interface';

export const getPointMonitoring = async (
  req: Request<{}, {}, IPostPointMonitoring>,
  res: Response
): Promise<void> => {
  try {
    const newPointMonitoring = await getPointMonitoringModel();

    if (newPointMonitoring) {
      res.status(201).json({data : newPointMonitoring});
      return;
    }

    res.status(400).json({
      success: false,
      message: 'No se pudo buscar los puntos de monitoreo. ',
    });
  } catch (error) {
    console.error('Error en createPointMonitoring:', error);

    res.status(500).json({
      success: false,
      message: 'Ocurrió un error al intentar buscar el punto de monitoreo.',
      error: error instanceof Error ? error.message : 'Error desconocido',
    });
  }
};

export const createPointMonitoring = async (
  req: Request<{}, {}, IPostPointMonitoring>, // Solo definimos el body explícitamente
  res: Response
) => {
  try {
    const newPointMonitoring = await postPointMonitoringModel(req.body);

    if (newPointMonitoring) {
      res.status(200).json({
        success: true,
        message: 'Punto de monitoreo creado exitosamente.',
        data: newPointMonitoring,
      });
      return;
    }

    res.status(400).json({
      success: false,
      message: 'No se pudo crear el punto de monitoreo. Verifique los datos enviados.',
    });
  } catch (error) {
    console.error('Error en createPointMonitoring:', error);

    res.status(500).json({
      success: false,
      message: 'Ocurrió un error al intentar crear el punto de monitoreo.',
      error: error instanceof Error ? error.message : 'Error desconocido',
    });
  }
};


export const updateStatusPointMonitoring = async (
  req: Request, res: Response
) => {
  const { id } = req.params; // ID del registro a actualizar
  const { status } = req.body; // Nuevo estado a asignar
  try {
    const updateStatusPointMonitoring = await putStatusPointMonitoringModel({id: Number(id), status: Number(status)});

    if (updateStatusPointMonitoring) {
      res.status(200).json({
        success: true,
        message: 'Punto de monitoreo creado exitosamente.'
      });
      return;
    }

    res.status(400).json({
      success: false,
      message: 'No se pudo crear el punto de monitoreo. Verifique los datos enviados.',
    });
    
  } catch (error) {
    
  }
}

export const updatePointMonitoring = async (
  req: Request<{ id: string }, {}, Partial<IPostPointMonitoring>>, // ID en params, body opcional
  res: Response
) => {
  try {
    const { id } = req.params; // Obtenemos el ID de los parámetros de la URL
    const updatedData = req.body; // Datos a actualizar

    const updatedPointMonitoring = await updatePointMonitoringModel(Number(id), updatedData);

    if (updatedPointMonitoring) {
      res.status(200).json({
        success: true,
        message: 'Punto de monitoreo actualizado exitosamente.',
        data: updatedPointMonitoring,
      });
      return;
    }

    res.status(404).json({
      success: false,
      message: 'Punto de monitoreo no encontrado o no se pudo actualizar.',
    });
  } catch (error) {
    console.error('Error en updatePointMonitoring:', error);

    res.status(500).json({
      success: false,
      message: 'Ocurrió un error al intentar actualizar el punto de monitoreo.',
      error: error instanceof Error ? error.message : 'Error desconocido',
    });
  }
};

export const deletePointMonitoring = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    const { id } = req.params;

    const deleteResult = await deletePointMonitoringModel(id);

    if (deleteResult) {
      res.status(200).json({
        success: true,
        message: 'Punto de monitoreo eliminado exitosamente.',
      });
      return;
    }

    res.status(404).json({
      success: false,
      message: 'Punto de monitoreo no encontrado o no se pudo eliminar.',
    });
  } catch (error) {
    console.error('Error en deletePointMonitoring:', error);

    res.status(500).json({
      success: false,
      message: 'Ocurrió un error al intentar eliminar el punto de monitoreo.',
      error: error instanceof Error ? error.message : 'Error desconocido',
    });
  }
};
