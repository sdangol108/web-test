import { Controller, Get, ClassMiddleware, Post } from '@overnightjs/core'
import { Request, Response } from 'express'

@Controller('customer')
export class CustomerController {
  @Get('/')
  private  async getCustomers(req: Request, res: Response) {

    // const reservations = await User.findOne({ eq.params.email ? eq.params.email : '' });
    // return res.status(200)
    // return this.someAsyncFunction(req)
    //                 .then(ret => res.status(200).json({msg: ret}));
  }
  @Post('createInv')
  private addInventory(req: Request, res: Response) {
    return res.status(200)
  }

  @Post('reserve')
  private addReservations(req: Request, res: Response) {
    return res.status(200)
  }

  private someAsyncFunction(id: number): Promise<string> {
    return new Promise((res, rej) => {
        isNaN(id) ? rej('Invalid id') : res('Valid id');
    })
 }
}
