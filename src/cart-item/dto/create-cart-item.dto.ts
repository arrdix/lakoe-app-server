import { IsNumber } from 'class-validator'

export class CreateCartItemDto {
    @IsNumber()
    qty: number

    @IsNumber()
    price: number

    @IsNumber()
    storeId: number

    @IsNumber()
    variantOptionValueId: number
}
