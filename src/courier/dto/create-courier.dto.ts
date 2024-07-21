import { IsNumber, IsString } from 'class-validator'

export class CreateCourierDto {
    @IsString()
    courierCode: string

    @IsString()
    courierServiceName: string

    @IsString()
    courierServiceCode: string

    @IsNumber()
    price: number
}
