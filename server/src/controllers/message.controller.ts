import { Request, Response } from 'express';
import { PuntoMonitoreo } from '../database/PuntoMonitoreo';
import AppDataSource from '../config/data-source';

const messageRepository = AppDataSource.getRepository(Message);

export const getMessages = async (req: Request, res: Response) => {
  try {
    const messages = await messageRepository.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching messages' });
  }
};

export const getMessageById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const message = await messageRepository.findOneBy({ id });
    if (message) {
      res.json(message);
    } else {
      res.status(404).json({ error: 'Message not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching message' });
  }
};

// export const createMessage = async (req: Request, res: Response) => {
//   try {
//     const { text } = req.body;
//     const newMessage = messageRepository.create({ text });
//     await messageRepository.save(newMessage);
//     res.status(201).json(newMessage);
//   } catch (error) {
//     res.status(500).json({ error: 'Error creating message' });
//   }
// };
