import { IsInt, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsNumber()
  productId?: number;

  @IsOptional()
  @IsInt()
  parentId?: number;
}
