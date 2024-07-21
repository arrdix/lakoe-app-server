import { Module } from "@nestjs/common";
import { BiteshipService } from "./biteship.service";
import { BiteshipController } from "./biteship.controller";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  controllers: [BiteshipController],
  providers: [BiteshipService, PrismaService],
})
export class BiteshipModule {}
