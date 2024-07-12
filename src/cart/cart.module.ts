import { Module } from '@nestjs/common'
import { CartService } from 'src/cart/cart.service'
import { PrismaService } from 'src/prisma/prisma.service'
import { CartController } from './cart.controller';

@Module({
    providers: [CartService, PrismaService],
    controllers: [CartController],
})
export class CartModule {}
