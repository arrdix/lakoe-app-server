import {
  IsBoolean,
  IsInt,
  IsString,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { CreateVariantOptionDto } from "../../variant-option/dto/create-variant-option.dto";

export class CreateVariantDto {
  @IsString()
  name: string;

  @IsBoolean()
  isActive: boolean;

  @IsOptional()
  @IsInt()
  productId?: number;

  @ValidateNested({ each: true })
  @Type(() => CreateVariantOptionDto)
  variantOptions: CreateVariantOptionDto[];
}
