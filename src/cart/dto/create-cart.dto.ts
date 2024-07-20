import { IsNumber, IsOptional } from 'class-validator'

export class CreateCartDto {
    @IsNumber()
    @IsOptional()
    price?: number

    @IsNumber()
    discount: number

    @IsNumber()
    @IsOptional()
    userId?: number

    @IsNumber()
    storeId: number
}
