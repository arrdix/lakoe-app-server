import { Injectable } from '@nestjs/common'
import { CreatePaymentlDto } from './dto/create-payment.dto'
import { PrismaService } from '../prisma/prisma.service'
import { OrderService } from '../order/order.service'

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
            status: 'Pesanan Baru',
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
