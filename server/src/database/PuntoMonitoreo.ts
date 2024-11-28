import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('punto_monitoreo')  // Define el nombre de la tabla en la base de datos
export class PuntoMonitoreo extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  ubication: string;

  @Column('text')
  length: string;

  @Column('text')
  latitude: string;

  @Column('decimal', { precision: 10, scale: 0 })
  temperature: number;

  @Column('date', { default: () => 'CURRENT_DATE' })
  date_register: string;  // Se usa string porque es un campo tipo `DATE`

  @Column('datetime', { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  date_updated: Date;

  @Column('int', { default: 1 })
  status: number;
}
