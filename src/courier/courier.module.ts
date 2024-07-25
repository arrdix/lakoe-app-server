import { Module } from '@nestjs/common'
import { CourierService } from './courier.service'
import { CourierController } from './courier.controller'
import { PrismaService } from '../prisma/prisma.service'
import { OrderService } from '../order/order.service'
import { CartService } from '../cart/cart.service'
import { MidtransService } from '../midtrans/midtrans.service'
import { VariantOptionValueService } from '../variant-option-value/variant-option-value.service'

@Module({
    controllers: [CourierController],
    providers: [
        CourierService,
        PrismaService,
        OrderService,
        CartService,
        MidtransService,
        VariantOptionValueService,
    ],
})
export class CourierModule {}
