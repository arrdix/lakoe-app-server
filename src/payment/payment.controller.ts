import { Controller, Post, Body, Res, Get } from '@nestjs/common'
import { PaymentService } from './payment.service'
import { Response } from 'express'

@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {}

    @Post()
    async create(@Body() data, @Res() res: Response) {
        const response = await this.paymentService.create({
            bank: data.bank,
            amount: +data.gross_amount,
            status: data.transaction_status,
            invoiceNumber: data.order_id,
        })

        return res.status(200).json(response)
    }

    @Get('finish')
    async redirect(@Res() res: Response) {
        console.log('redirect')
        return res.redirect('http://localhost:5173')
    }
}
