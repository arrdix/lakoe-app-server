import { IsArray, IsString } from 'class-validator'

export class SkusDto {
    @IsArray()
    @IsString({ each: true })
    skus: string[]
}
