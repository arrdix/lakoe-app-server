import { Module } from '@nestjs/common'
import { PaymentService } from './payment.service'
import { PaymentController } from './payment.controller'
import { PrismaService } from '../prisma/prisma.service'
import { OrderService } from '../order/order.service'
import { CartService } from '../cart/cart.service'
import { MidtransService } from '../midtrans/midtrans.service'
import { VariantOptionValueService } from '../variant-option-value/variant-option-value.service'

@Module({
    controllers: [PaymentController],
    providers: [
        PaymentService,
        PrismaService,
        OrderService,
        CartService,
        MidtransService,
        VariantOptionValueService,
    ],
})
export class PaymentModule {}
