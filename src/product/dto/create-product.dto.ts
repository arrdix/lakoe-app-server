import { Type } from 'class-transformer'
import { IsArray, IsBoolean, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'
import { CreateVariantDto } from 'src/variant/dto/create-variant.dto'

export class CreateProductDto {
    @IsString()
    name: string

    @IsString()
    description: string

    @IsArray()
    @IsString({ each: true })
    attachments: string[]

    @IsOptional()
    @IsBoolean()
    isActive: boolean

    @IsNumber()
    minimumOrder: number

    @IsNumber()
    storeId: number

    @IsNumber()
    categoryName: string

    @IsString()
    url: string

    @ValidateNested({ each: true })
    @Type(() => CreateVariantDto)
    variant: CreateVariantDto
}
