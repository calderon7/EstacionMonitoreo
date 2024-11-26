import { Router } from 'express';
import {
  getMessages,
  getMessageById,
//   createMessage,
} from '../controllers/message.controller';

const router = Router();

router.get('/', getMessages);
router.get('/:id', getMessageById);
// router.post('/', createMessage);

export default router;
