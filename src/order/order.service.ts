import { Injectable } from "@nestjs/common";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Invoice } from "src/types/invoice-type";
import { Midtrans } from "@miwone/midtrans-client-typescript";

@Injectable()
export class OrderService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createOrderDto: CreateOrderDto) {
    const invoice = await this.prismaService.invoices.create({
      data: createOrderDto,
    });

    const snap = new Midtrans.Snap({
      clientKey: process.env.MIDTRANS_CLIENT_KEY,
      serverKey: process.env.MIDTRANS_SECRET_KEY,
      isProduction: false,
    });

    const transactionParameter = {
      transaction_details: {
        order_id: invoice.id,
        gross_amount: createOrderDto.price + createOrderDto.serviceCharge,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        first_name: createOrderDto.receiverName,
        last_name: "",
        phone: createOrderDto.receiverPhone,
        billing_address: {
          address: createOrderDto.receiverAddress,
        },
      },
    };

    const transaction = await snap.createTransaction(transactionParameter);

    return transaction;
  }

  async findAll() {
    return await this.prismaService.invoices.findMany({
      include: {
        carts: {
          include: {
            cartItems: {
              include: {
                variantOptionValues: {
                  include: {
                    variantOptions: {
                      include: {
                        variant: {
                          include: {
                            products: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const rawInvoice = await this.prismaService.invoices.findFirst({
      where: {
        id,
      },
      include: {
        carts: {
          include: {
            cartItems: {
              include: {
                variantOptionValues: {
                  include: {
                    variantOptions: {
                      include: {
                        variant: {
                          include: {
                            products: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

    return {
      ...rawInvoice,
      receiverPhone: rawInvoice.receiverPhone.toString(),
    };
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.prismaService.invoices.update({
      where: {
        id,
      },
      data: updateOrderDto,
    });
  }

  remove(id: number) {
    return this.prismaService.invoices.delete({
      where: {
        id,
      },
    });
  }
}
