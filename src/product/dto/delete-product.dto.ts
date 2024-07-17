import { IsArray, IsString } from 'class-validator'

export class DeleteProductDto {
    @IsArray()
    @IsString({ each: true })
    skus: string[]
}
