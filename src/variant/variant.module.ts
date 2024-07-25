import { Module } from "@nestjs/common";
import { VariantService } from "./variant.service";
import { VariantController } from "./variant.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [VariantController],
  providers: [VariantService, PrismaService],
})
export class VariantModule {}
