import { IsNotEmpty,IsString } from "class-validator";

export class CreateStoreDto {
    @IsNotEmpty()
    @IsString()
    name: string
    @IsString()
    slogan: string
    @IsString()
    description: string
    @IsString()
    domain: string
    @IsString()
    logoAttachment: string
    @IsString()
    bannerAttachment: string
    
}
