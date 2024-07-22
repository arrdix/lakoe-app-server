import { Type } from "class-transformer";
import { IsNumber, IsString, ValidateNested } from "class-validator";

export class GetRatesDto {
  @IsNumber()
  origin_latitude: number;

  @IsNumber()
  origin_longitude: number;

  @IsNumber()
  destination_latitude: number;

  @IsNumber()
  destination_longitude: number;

  @IsString()
  couriers: string;

  @ValidateNested({ each: true })
  @Type(() => Items)
  item: Items[];
}

class Items {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  value: number;

  @IsNumber()
  length: number;

  @IsNumber()
  width: number;

  @IsNumber()
  height: number;

  @IsNumber()
  weight: number;

  @IsNumber()
  quantity: number;
}
