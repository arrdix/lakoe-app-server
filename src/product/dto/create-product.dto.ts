import { IsArray, IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateProductDto {
    @IsString()
    name: string

    @IsString()
    @IsOptional()
    description: string

    @IsArray()
    @IsString({ each: true })
    attachments: string[]

    @IsBoolean()
    isActive: boolean

    @IsNumber()
    minimumOrder: number

    @IsNumber()
    storeId: number
}
