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

  @IsString()
  receiverPhone: string;

  @IsString()
  receiverAddress: string;

  @IsString()
  receiverName: string;

  @IsString()
  invoiceNumber: string;
}
