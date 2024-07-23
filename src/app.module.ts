import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'
import { PrismaModule } from './prisma/prisma.module'
import { ProductModule } from './product/product.module'
import { OrderModule } from './order/order.module'
import { CartItemModule } from './cart-item/cart-item.module'
import { CartModule } from './cart/cart.module'
import { UserModule } from './user/user.module'
import { CategoryModule } from './category/category.module'
import { VariantModule } from './variant/variant.module'
import { VariantOptionModule } from './variant-option/variant-option.module'
import { VariantOptionValueModule } from './variant-option-value/variant-option-value.module'
import { AuthModule } from './auth/auth.module'
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module'
import { CourierModule } from './courier/courier.module'
import { MidtransModule } from 'src/midtrans/midtrans.module'
import { PaymentModule } from './payment/payment.module'
import { AuthenticationMiddleware } from 'src/middlewares/authentication.middleware'
import { StoreModule } from './store/store.module'

@Module({
    imports: [
        PrismaModule,
        ProductModule,
        OrderModule,
        CartItemModule,
        CartModule,
        UserModule,
        CategoryModule,
        VariantModule,
        VariantOptionModule,
        VariantOptionValueModule,
        AuthModule,
        CloudinaryModule,
        CourierModule,
        MidtransModule,
        PaymentModule,
        StoreModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(AuthenticationMiddleware)
            .exclude(
                { path: '/auth/login', method: RequestMethod.POST },
                { path: '/auth/register', method: RequestMethod.POST },
                { path: '/auth/forgot', method: RequestMethod.POST },
                { path: '/product/id', method: RequestMethod.GET },
                { path: '/product/id/:id', method: RequestMethod.GET },
                { path: '/product/sku/:sku', method: RequestMethod.GET },
                { path: '/payment', method: RequestMethod.POST },
                { path: '/payment/finish', method: RequestMethod.GET }
                // { path: '/cart/uncomplete', method: RequestMethod.GET },
                // { path: '/cart-item/count', method: RequestMethod.GET }
            )
            .forRoutes({ path: '*', method: RequestMethod.ALL })
    }
}
