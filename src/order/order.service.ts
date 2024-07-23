import { Injectable } from '@nestjs/common'
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import invoiceCreator from 'src/utils/InvoiceCreator'
import { CartService } from 'src/cart/cart.service'
import { MidtransService } from 'src/midtrans/midtrans.service'
import { VariantOptionValueService } from 'src/variant-option-value/variant-option-value.service'

@Injectable()
export class OrderService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly cartService: CartService,
        private readonly midtransService: MidtransService,
        private readonly variantOptionValueService: VariantOptionValueService
    ) {}

    async create(createOrderDto: CreateOrderDto) {
        const cart = await this.cartService.findOne(createOrderDto.cartId)

        cart.cartItems.map((cartItem) => {
            // cart item price divied by product price
            const orderQty = cartItem.price / cartItem.variantOptionValues.price
            const targetId = cartItem.variantOptionValueId

            this.variantOptionValueService.updateStock(targetId, orderQty)
        })

        await this.cartService.update(cart.id, {
            isComplete: true,
        })

        const invoice = await this.prismaService.invoices.create({
            data: {
                ...createOrderDto,
                price: cart.price + createOrderDto.serviceCharge,
                invoiceNumber: invoiceCreator(),
            },
        })

        return await this.midtransService.create({
            transaction_details: {
                order_id: invoice.invoiceNumber,
                gross_amount: invoice.price,
            },
            customer_detail: {
                first_name: createOrderDto.receiverName,
                last_name: createOrderDto.receiverName,
                email: createOrderDto.receiverEmail,
                phone: +createOrderDto.receiverPhone,
            },
        })
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
        })
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
        })

        return {
            ...rawInvoice,
            receiverPhone: rawInvoice.receiverPhone.toString(),
        }
    }

    async findOneByInvoiceNumber(invoiceNumber: string) {
        return await this.prismaService.invoices.findFirst({
            where: {
                invoiceNumber,
            },
        })
    }

    async findOneByWaybill(waybill: string) {
        return await this.prismaService.invoices.findFirst({
            where: {
                waybill,
            },
        })
    }

    update(id: number, updateOrderDto: UpdateOrderDto) {
        return this.prismaService.invoices.update({
            where: {
                id,
            },
            data: updateOrderDto,
        })
    }

    remove(id: number) {
        return this.prismaService.invoices.delete({
            where: {
                id,
            },
        })
    }
}
