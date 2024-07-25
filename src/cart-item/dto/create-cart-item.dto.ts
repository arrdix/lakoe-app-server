import { IsNumber, IsString } from 'class-validator'

export class CreateCartItemDto {
    @IsNumber()
    qty: number

    @IsNumber()
    storeId: number

    @IsNumber()
    cartId: number

    @IsNumber()
    userId: number

    @IsString()
    sku: string
}

export class CreateCartItemDatabaseDto {
    @IsNumber()
    qty: number

    @IsNumber()
    price: number

    @IsNumber()
    cartId: number

    @IsNumber()
    userId: number

    @IsNumber()
    storeId: number

    @IsNumber()
    variantOptionValueId: number
}
