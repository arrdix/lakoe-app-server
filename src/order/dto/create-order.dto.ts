import { IsNumber, IsString } from "class-validator";

export class CreateOrderDto {
  @IsNumber()
  price: number;

  @IsNumber()
  serviceCharge: number;

  @IsString()
  status: string;

  @IsNumber()
  receiverLatitude: number;

  @IsNumber()
  receiverLongtitude: number;

  @IsString()
  receiverDistrict: string;

  @IsNumber()
  receiverPhone: number;

  @IsString()
  receiverAddress: string;

  @IsString()
  receiverName: string;

  @IsNumber()
  receiverNumber: number;
}
