import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({ name: 'punto_monitoreo' })
export class PuntoMonitoreo {
  @PrimaryGeneratedColumn()
  id: number

  @Column('text')
  ubication: string

  @Column('text')
  length: string

  @Column('text')
  latitude: string

  @Column('decimal', { precision: 10, scale: 0 })
  temperature: number

  @Column('date')
  date_register: string
}
