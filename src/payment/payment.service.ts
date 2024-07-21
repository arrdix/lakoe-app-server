import { Injectable } from '@nestjs/common'
import { CreatePaymentlDto } from './dto/create-payment.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { OrderService } from 'src/order/order.service'

@Injectable()
export class PaymentService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly orderService: OrderService
    ) {}

    async create(createPaymentDto: CreatePaymentlDto) {
        const requestedInvoice = await this.orderService.findOneByInvoiceNumber(
            createPaymentDto.invoiceNumber
        )

        await this.orderService.update(requestedInvoice.id, {
            status: 'PESANAN BARU',
        })

        delete createPaymentDto.invoiceNumber
        return this.prismaService.payments.create({
            data: {
                ...createPaymentDto,
                amount: Math.floor(createPaymentDto.amount),
                invoiceId: requestedInvoice.id,
            },
        })
    }
}
