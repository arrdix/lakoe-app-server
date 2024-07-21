import { Controller, Post, Body, Res } from '@nestjs/common'
import { Response } from 'express'
import { CreateTransactionDto } from './dto/create-transaction.dto'
import { MidtransService } from './midtrans.service'

@Controller('midtrans')
export class MidtransController {
    constructor(private readonly midtransService: MidtransService) {}

    @Post()
    async create(@Body() createTransactionDto: CreateTransactionDto, @Res() res: Response) {
        // const loggedUserId = res.locals.user.id
        const response = await this.midtransService.create(createTransactionDto)

        res.status(200).json(response)
    }
}
