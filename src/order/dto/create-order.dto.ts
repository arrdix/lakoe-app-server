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
  receiverVillage: string;

  @IsString()
  receiverPhone: string;

  @IsString()
  receiverAddress: string;

  @IsString()
  receiverName: string;

  @IsString()
  notes: string;

  @IsString()
  invoiceNumber: string;
}
