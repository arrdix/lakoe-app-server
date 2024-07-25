import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { PrismaService } from '../prisma/prisma.service'
import { CartService } from '../cart/cart.service'
import { UserService } from '../user/user.service'

@Module({
    controllers: [AuthController],
    providers: [AuthService, PrismaService, CartService, UserService],
})
export class AuthModule {}
