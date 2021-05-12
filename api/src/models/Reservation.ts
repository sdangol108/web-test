import {
    Column,
    CreatedAt,
    Model,
    PrimaryKey, Table,
    ForeignKey,
    BelongsTo,
    UpdatedAt
  } from 'sequelize-typescript'
import { Customer } from './Customer'
import { Inventory } from './Inventory'
  
  @Table({ 
    tableName: 'reservations' 
  })
  export class Reservation extends Model<Reservation>{
    @PrimaryKey
    @Column({ autoIncrement: true })
    id: number
  
    @Column
    size: number

    @Column
    reserved_datetime: Date

    @CreatedAt
    created_at: Date

    @ForeignKey(() => Customer)
    customer_id: number

    @ForeignKey(() => Inventory)
    inventory_id: number

    @BelongsTo(() => Inventory)
    inventory: Inventory

    @BelongsTo(() => Customer)
    customer: Customer
  }
  