import { Module } from '@nestjs/common'
import { CartItemService } from './cart-item.service'
import { CartItemController } from './cart-item.controller'
import { PrismaService } from 'src/prisma/prisma.service'
import { CartService } from 'src/cart/cart.service'
import { UserService } from 'src/user/user.service'

@Module({
    controllers: [CartItemController],
    providers: [CartItemService, PrismaService, CartService, UserService],
})
export class CartItemModule {}
