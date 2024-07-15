import { Module } from '@nestjs/common';
import { VariantOptionService } from './variant-option.service';
import { VariantOptionController } from './variant-option.controller';

@Module({
  controllers: [VariantOptionController],
  providers: [VariantOptionService],
})
export class VariantOptionModule {}
