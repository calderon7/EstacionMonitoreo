import { Router } from 'express';
import { createPointMonitoring, deletePointMonitoring, getPointMonitoring, updatePointMonitoring, updateStatusPointMonitoring } from '../controllers';

const router = Router();

// router.get('/', getMessages);
// router.get('/:id', getMessageById);
router.get('/point-monitoring/', getPointMonitoring);
router.post('/create-point-monitoring/', createPointMonitoring);
router.put('/update-status-point-monitoring/:id', updateStatusPointMonitoring);
router.put('/edit-point-monitoring/:id', updatePointMonitoring);
router.delete('/delete-point-monitoring/:id', deletePointMonitoring);


export default router;
