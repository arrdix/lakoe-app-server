import { Type } from 'class-transformer'
import { IsNumber, IsString, ValidateNested } from 'class-validator'

class Coordinate {
    @IsNumber()
    latitude: number

    @IsNumber()
    longitude: number
}

class Items {
    @IsString()
    name: string

    @IsString()
    description: string

    @IsNumber()
    value: number

    @IsNumber()
    weight: number

    @IsNumber()
    quantity: number
}

export class ReqPickupDto {
    @IsNumber()
    invoice_id: 666

    @IsString()
    origin_contact_name: string

    @IsString()
    origin_contact_phone: string

    @IsString()
    origin_address: string

    @ValidateNested({ each: true })
    @Type(() => Coordinate)
    origin_coordinate: Coordinate

    @IsString()
    destination_contact_name: string

    @IsString()
    destination_contact_phone: string

    @IsString()
    destination_contact_email: string

    @IsString()
    destination_address: string

    @ValidateNested({ each: true })
    @Type(() => Coordinate)
    destination_coordinate: Coordinate

    @IsString()
    courier_company: string

    @IsString()
    courier_type: string

    @IsString()
    delivery_type: string

    @ValidateNested({ each: true })
    @Type(() => Items)
    items: Items[]
}
