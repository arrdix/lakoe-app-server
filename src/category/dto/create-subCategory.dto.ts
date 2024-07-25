import { IsString } from "class-validator";

export class CreateSubCategoryDto {
  @IsString()
  name: string;
}
