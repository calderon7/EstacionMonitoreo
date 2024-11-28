// import dotenv from 'dotenv';
// import express from 'express';
// import { createConnection } from 'typeorm';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// const connectToDatabase = async () => {
//   try {
//     await createConnection({
//       type: 'mysql',
//       host: process.env.DB_HOST,
//       port: parseInt(process.env.DB_PORT || '3306', 10),
//       username: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       entities: ['./src/entities/*.ts'],
//       synchronize: true, // Solo para desarrollo
//       logging: true,
//     });
//     // console.log('Conexión exitosa a la base de datos MySQL');
//   } catch (error) {
//     // console.error('Error conectando a la base de datos:', error);
//     process.exit(1);
//   }
// };

// const startServer = async () => {
//   await connectToDatabase();

//   app.use(express.json());

//   app.get('/', (req, res) => {
//     res.send('¡Servidor funcionando!');
//   });

//   app.listen(PORT, () => {
//     console.log(`Servidor escuchando en http://localhost:${PORT}`);
//   });
// };

// startServer();


import 'reflect-metadata'
import app from './app'
import { PORT } from './config'

async function main() {
  try {
    app.listen(PORT)
    console.log('Server main is listening on port:', PORT)
  } catch (error) {
    console.log(error)
  }
}

main()
