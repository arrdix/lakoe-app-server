import { Module } from '@nestjs/common'
import { CartService } from 'src/cart/cart.service'
import { PrismaService } from 'src/prisma/prisma.service'

@Module({
    providers: [CartService, PrismaService],
})
export class CartModule {}
