import {
    Column,
    CreatedAt,
    HasMany,
    Model,
    PrimaryKey, Table,
    Sequelize
  } from 'sequelize-typescript'
import { Reservation } from '.'
  
  @Table({ 
    tableName: 'inventory' 
  })
  export class Inventory extends Model<Inventory> {
    @PrimaryKey
    @Column({ autoIncrement: true })
    id: number
  
    @Column
    start_time: Date
  
    @Column
    end_time: Date

    @Column
    reservation_nos: number
  
    @CreatedAt
    created_at: Date

    @HasMany(() => Reservation)
    reservations: Reservation[]
  }

  //should be able to display how many reservations with in start and end time
  
  