import 'dotenv/config';
import { DataSource } from 'typeorm';
const AppDataSource = new DataSource({
    type: process.env.DB_TYPE as 'mysql' | 'postgres', // 'mysql' o 'postgres' según tu base de datos
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306'), // Asegúrate de que el puerto esté en formato numérico
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ['./src/config/*.ts'],
    synchronize: true,
    logging: true,
  });

export default AppDataSource;
