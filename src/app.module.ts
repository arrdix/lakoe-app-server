import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma/prisma.module";
import { ProductModule } from "./product/product.module";
import { OrderModule } from "./order/order.module";
import { CartItemModule } from "./cart-item/cart-item.module";
import { CartModule } from "./cart/cart.module";
import { UserModule } from "./user/user.module";
import { CategoryModule } from "./category/category.module";

@Module({
  imports: [
    PrismaModule,
    ProductModule,
    OrderModule,
    CartItemModule,
    CartModule,
    UserModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
