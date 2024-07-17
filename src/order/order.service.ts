import { Injectable } from "@nestjs/common";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Invoice } from "src/types/invoice-type";

@Injectable()
export class OrderService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createOrderDto: CreateOrderDto) {
    return this.prismaService.invoices.create({
      data: createOrderDto,
    });
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
