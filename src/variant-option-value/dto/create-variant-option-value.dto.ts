import { IsBoolean, IsInt, IsNumber, IsString } from "class-validator";

export class CreateVariantOptionValueDto {
  @IsString()
  sku: string;

  @IsNumber()
  weight: number;

  @IsInt()
  stock: number;

  @IsNumber()
  price: number;

  @IsBoolean()
  isActive: boolean;
}
