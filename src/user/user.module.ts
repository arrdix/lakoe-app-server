import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { PrismaService } from 'src/prisma/prisma.service'
import { CartService } from 'src/cart/cart.service'
import { AuthenticationMiddleware } from 'src/middlewares/authentication.middleware'

@Module({
    controllers: [UserController],
    providers: [UserService, PrismaService, CartService],
})
export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthenticationMiddleware)
            .exclude(
                { path: '/auth/login', method: RequestMethod.POST },
                { path: '/auth/register', method: RequestMethod.POST },
                { path: '/auth/forgot', method: RequestMethod.POST },
                { path: '/product/id', method: RequestMethod.GET },
                { path: '/product/sku', method: RequestMethod.GET }
            )
            .forRoutes({ path: '*', method: RequestMethod.ALL })
    }
}
