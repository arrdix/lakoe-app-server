import { Injectable } from '@nestjs/common';
import { CreateVariantOptionValueDto } from './dto/create-variant-option-value.dto';
import { UpdateVariantOptionValueDto } from './dto/update-variant-option-value.dto';

@Injectable()
export class VariantOptionValueService {
  create(createVariantOptionValueDto: CreateVariantOptionValueDto) {
    return 'This action adds a new variantOptionValue';
  }

  findAll() {
    return `This action returns all variantOptionValue`;
  }

  findOne(id: number) {
    return `This action returns a #${id} variantOptionValue`;
  }

  update(id: number, updateVariantOptionValueDto: UpdateVariantOptionValueDto) {
    return `This action updates a #${id} variantOptionValue`;
  }

  remove(id: number) {
    return `This action removes a #${id} variantOptionValue`;
  }
}
