import { IsInt, IsString, ValidateNested, IsOptional } from 'class-validator'
import { Type } from 'class-transformer'
import { CreateVariantOptionValueDto } from '../../variant-option-value/dto/create-variant-option-value.dto'

export class CreateVariantOptionDto {
    @IsInt()
    id: number

    @IsString()
    name: string

    @IsOptional()
    @ValidateNested()
    @Type(() => CreateVariantOptionValueDto)
    variantOptionValue?: CreateVariantOptionValueDto
}
