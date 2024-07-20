import { IsNumber, IsString } from 'class-validator'

export class CreatePaymentlDto {
    @IsString()
    bank: string

    @IsNumber()
    amount: number

    @IsString()
    status: string

    @IsNumber()
    invoiceNumber: string
}
