import 'dotenv/config';
import { DataSource } from 'typeorm';
import { PuntoMonitoreo } from '../database';

console.log(process.env.DB_HOST, process.env.DB_PORT, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_DATABASE, process.env.DB_SYNCHRONIZE);


export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'test',
  synchronize: process.env.DB_SYNCHRONIZE === 'true',
  logging: true,
  entities: [PuntoMonitoreo],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Conexión a la base de datos establecida');
  })
  .catch((error) => {
    console.error('Error durante la inicialización de la base de datos:', error);
  });


export default AppDataSource;
