import { Cart } from "src/types/cart-type";

export type Invoice = {
  id: number;
  price: number;
  serviceCharge: number;
  status: string;
  receiverLatitude: number;
  receiverLongtitude: number;
  receiverDistrict: string;
  receiverPhone: string;
  receiverAddress: string;
  receiverName: string;
  invoiceNumber: string;
  createdAt: Date;
  updatedAt: Date;
  carts?: Cart[];
};
