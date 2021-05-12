import { Controller, Post } from '@overnightjs/core'
import { Request, Response } from 'express'

@Controller('api/inventories')
export class InventoryController {
  @Post('createInv')
  private addInventory(req: Request, res: Response) {
    return res.status(200)
  }
}
