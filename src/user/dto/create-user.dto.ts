import { IsString, IsNumber } from 'class-validator'

export class CreateUserDto {
    @IsString()
    name: string

    @IsString()
    email: string

    @IsString()
    phone: string

    @IsString()
    password: string

    @IsString()
    role: string

    @IsNumber()
    profileId: number
}
