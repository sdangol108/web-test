import {
    Column,
    Model,
    PrimaryKey, Table,
    HasMany,
    CreatedAt
} from 'sequelize-typescript'
import { Reservation } from '.'
  
  @Table({ 
    tableName: 'customers' 
  })
  export class Customer extends Model<Customer>{
    @PrimaryKey
    @Column({ autoIncrement: true })
    id: number
  
    @Column
    firstName: string

    @Column
    lastName: string
  
    @Column
    email: string

    @CreatedAt
    createdAt: Date

    @HasMany(() => Reservation)
    reservations: Reservation[]

  }
