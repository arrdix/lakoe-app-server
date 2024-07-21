import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma/prisma.module";
import { ProductModule } from "./product/product.module";
import { OrderModule } from "./order/order.module";
import { CartItemModule } from "./cart-item/cart-item.module";
import { CartModule } from "./cart/cart.module";
import { UserModule } from "./user/user.module";
import { CategoryModule } from "./category/category.module";
import { VariantModule } from "./variant/variant.module";
import { VariantOptionModule } from "./variant-option/variant-option.module";
import { VariantOptionValueModule } from "./variant-option-value/variant-option-value.module";
import { AuthModule } from "./auth/auth.module";
import { CloudinaryModule } from "src/cloudinary/cloudinary.module";
import { BiteshipModule } from './biteship/biteship.module';

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
    BiteshipModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
