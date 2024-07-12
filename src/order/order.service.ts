import { Injectable } from "@nestjs/common";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { PrismaService } from "src/prisma/prisma.service";

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

  findOne(id: number) {
    return this.prismaService.invoices.findFirst({
      where: {
        id,
      },
    });
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
