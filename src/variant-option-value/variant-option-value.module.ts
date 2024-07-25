import { Module } from '@nestjs/common'
import { VariantOptionValueService } from './variant-option-value.service'
import { VariantOptionValueController } from './variant-option-value.controller'
import { PrismaService } from '../prisma/prisma.service'

@Module({
    controllers: [VariantOptionValueController],
    providers: [VariantOptionValueService, PrismaService],
})
export class VariantOptionValueModule {}
