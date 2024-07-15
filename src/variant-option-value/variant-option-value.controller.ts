import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VariantOptionValueService } from './variant-option-value.service';
import { CreateVariantOptionValueDto } from './dto/create-variant-option-value.dto';
import { UpdateVariantOptionValueDto } from './dto/update-variant-option-value.dto';

@Controller('variant-option-value')
export class VariantOptionValueController {
  constructor(private readonly variantOptionValueService: VariantOptionValueService) {}

  @Post()
  create(@Body() createVariantOptionValueDto: CreateVariantOptionValueDto) {
    return this.variantOptionValueService.create(createVariantOptionValueDto);
  }

  @Get()
  findAll() {
    return this.variantOptionValueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.variantOptionValueService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVariantOptionValueDto: UpdateVariantOptionValueDto) {
    return this.variantOptionValueService.update(+id, updateVariantOptionValueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.variantOptionValueService.remove(+id);
  }
}
