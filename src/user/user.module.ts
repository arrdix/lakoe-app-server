import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { CartService } from "src/cart/cart.service";
import { AuthenticationMiddleware } from "src/middlewares/authentication.middleware";

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, CartService],
})
export class UserModule {
}
