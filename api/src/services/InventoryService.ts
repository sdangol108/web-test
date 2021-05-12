import { Request } from "express";
import { getAttributes, Repository } from "sequelize-typescript";
import {Op} from "sequelize";
import { Customer, Inventory, Reservation } from "../models";
import moment from "moment";
import sequelize from "sequelize";

export class InventoryService {
    public async createInventory(attributes) {
        const data = await Inventory.create({
            start_time: attributes.startTime,
            end_time: attributes.endTime,
            reservation_nos: attributes.reservationNos,
            created_at: sequelize.fn('GETDATE')
        });
        return 
    }

    public async createReservation(attributes) {
        const inventory = await Inventory.findOne({
            where: 
                sequelize.where(sequelize.fn('DATE', sequelize.col('created_at')), attributes.date_time)
          });
        const data = await Reservation.create(attributes);
        const data1 = await Customer.create(attributes);

    }

    public async getAllReservations(startTime: Date, endTime: Date) {
        const data = await Inventory.findAll({where : {"id" : {[Op.between] : [startTime , endTime ]}}})
    }
}