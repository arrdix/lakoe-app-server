import { IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateOrderDto {
    @IsNumber()
    serviceCharge: number

    @IsString()
    status: string

    @IsNumber()
    receiverLatitude: number

    @IsNumber()
    receiverLongtitude: number

    @IsString()
    receiverDistrict: string

    @IsString()
    receiverVillage: string

    @IsString()
    receiverPhone: string

    @IsString()
    receiverAddress: string

    @IsString()
    receiverName: string

    @IsString()
    receiverEmail: string

    @IsString()
    @IsOptional()
    notes?: string

    @IsNumber()
    cartId: number

    @IsNumber()
    courierId: number

    @IsNumber()
    @IsOptional()
    userId: number
}
