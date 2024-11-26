import express from 'express';
import cors from 'cors';
import messageRoutes from './routes/message.routes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/messages', messageRoutes);

export default app;
