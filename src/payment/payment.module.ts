import { Module } from '@nestjs/common'
import { PaymentService } from './payment.service'
import { PaymentController } from './payment.controller'
import { PrismaService } from 'src/prisma/prisma.service'
import { OrderService } from 'src/order/order.service'
import { CartService } from 'src/cart/cart.service'
import { MidtransService } from 'src/midtrans/midtrans.service'
import { VariantOptionValueService } from 'src/variant-option-value/variant-option-value.service'

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
