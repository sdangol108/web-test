import { Controller, Get, Post } from '@overnightjs/core'
import { Request, Response } from 'express'

@Controller('api/reservations')
export class ReservationController {
  @Get('')
  private  getReservations(req: Request, res: Response) { //see reservation  on selected date time


  }
  @Post('reserve')
  private addReservation(req: Request, res: Response) {
    return res.status(200)
  }
}
