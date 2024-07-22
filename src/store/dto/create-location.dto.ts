import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateLocationDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsNumber()
  postalCode: number;

  @IsString()
  cityDistrict: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longtitude: number;

  @IsBoolean()
  isMainLocation: boolean;

  @IsNumber()
  storeId: number;

  @IsNumber()
  profileId: number;
}
