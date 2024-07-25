import { Type } from 'class-transformer'
import { IsBoolean, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator'

class TransactionDetailDto {
    @IsString()
    order_id: string

    @IsNumber()
    gross_amount: number
}

class CustomerDetailDto {
    @IsString()
    first_name: string

    @IsString()
    last_name: string

    @IsString()
    email: string

    @IsNumber()
    phone: number
}

export class CreateTransactionDto {
    @ValidateNested({ each: true })
    @Type(() => TransactionDetailDto)
    transaction_details: TransactionDetailDto

    @ValidateNested({ each: true })
    @Type(() => CustomerDetailDto)
    customer_detail: CustomerDetailDto
}
