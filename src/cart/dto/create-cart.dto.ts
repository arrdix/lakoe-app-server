import { IsNumber } from 'class-validator'

export class CreateCartDto {
    @IsNumber()
    price: number

    @IsNumber()
    discount: number

    @IsNumber()
    userId: number

    @IsNumber()
    storeId: number
}
