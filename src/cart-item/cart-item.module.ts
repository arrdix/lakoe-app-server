import { Module } from '@nestjs/common'
import { CartItemService } from './cart-item.service'
import { CartItemController } from './cart-item.controller'
import { PrismaService } from '../prisma/prisma.service'
import { CartService } from '../cart/cart.service'
import { UserService } from '../user/user.service'
import { VariantOptionValueService } from '../variant-option-value/variant-option-value.service'

@Module({
    controllers: [CartItemController],
    providers: [
        CartItemService,
        PrismaService,
        CartService,
        UserService,
        VariantOptionValueService,
    ],
})
export class CartItemModule {}
