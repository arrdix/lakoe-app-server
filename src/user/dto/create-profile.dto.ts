import { IsString, IsNumber } from 'class-validator'

export class CreateProfileDto {
    @IsNumber()
    userId: number

    @IsString()
    locations: string
}
