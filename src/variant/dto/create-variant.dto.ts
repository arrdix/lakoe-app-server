import { IsBoolean, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { CreateVariantOptionDto } from '../../variant-option/dto/create-variant-option.dto'

export class CreateVariantDto {
    @IsString()
    name: string

    @IsOptional()
    @IsBoolean()
    isActive: boolean

    @ValidateNested({ each: true })
    @Type(() => CreateVariantOptionDto)
    variantOptions: CreateVariantOptionDto[]
}
