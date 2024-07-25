import { IsBoolean, IsInt, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateVariantOptionValueDto {
    @IsString()
    sku: string

    @IsNumber()
    weight: number

    @IsInt()
    stock: number

    @IsNumber()
    price: number

    @IsOptional()
    @IsBoolean()
    isActive: string
}
