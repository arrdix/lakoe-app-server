import { Module } from '@nestjs/common'
import { OrderService } from './order.service'
import { OrderController } from './order.controller'
import { PrismaService } from '../prisma/prisma.service'
import { CartService } from '../cart/cart.service'
import { MidtransService } from '../midtrans/midtrans.service'
import { VariantOptionValueService } from '../variant-option-value/variant-option-value.service'

@Module({
    controllers: [OrderController],
    providers: [
        OrderService,
        PrismaService,
        CartService,
        MidtransService,
        VariantOptionValueService,
    ],
})
export class OrderModule {}
