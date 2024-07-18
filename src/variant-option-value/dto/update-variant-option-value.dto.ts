import { PartialType } from '@nestjs/mapped-types'
import { CreateVariantOptionValueDto } from './create-variant-option-value.dto'

export class UpdateVariantOptionValueDto extends PartialType(CreateVariantOptionValueDto) {}
