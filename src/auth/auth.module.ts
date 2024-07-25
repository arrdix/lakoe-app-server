import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { CartService } from "src/cart/cart.service";
import { UserService } from "src/user/user.service";

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, CartService, UserService],
})
export class AuthModule {}
