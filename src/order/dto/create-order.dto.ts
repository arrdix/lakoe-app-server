import { IsNumber, IsString } from "class-validator";

export class CreateOrderDto {
  @IsNumber()
  price: number;

  @IsNumber()
  serviceCharge: number;

  //TODO: courier charge

  //TODO: receiverEmail

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
