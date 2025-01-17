import { Injectable } from '@nestjs/common'
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'
import { PrismaService } from '../prisma/prisma.service'
import invoiceCreator from '../utils/InvoiceCreator'
import { CartService } from '../cart/cart.service'
import { MidtransService } from '../midtrans/midtrans.service'
import { VariantOptionValueService } from '../variant-option-value/variant-option-value.service'

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

    async findAll(loggedUserId: number) {
        const store = await this.prismaService.stores.findFirst({
            where: {
                userId: loggedUserId,
            },
        })

        if (!store) {
            throw new Error()
        }

        return await this.prismaService.invoices.findMany({
            where: {
                carts: {
                    storeId: store.id,
                },
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

    async orderSummary(loggedUserId: number) {
        const store = await this.prismaService.stores.findFirst({
            where: {
                userId: loggedUserId,
            },
        })

        if (!store) {
            throw new Error()
        }

        const belumDibayar = await this.prismaService.invoices.count({
            where: {
                status: 'Belum Dibayar',
                carts: {
                    storeId: store.id,
                },
            },
        })

        const pesananBaru = await this.prismaService.invoices.count({
            where: {
                status: 'Pesanan Baru',
                carts: {
                    storeId: store.id,
                },
            },
        })

        const siapDikirim = await this.prismaService.invoices.count({
            where: {
                status: 'Siap Dikirim',
                carts: {
                    storeId: store.id,
                },
            },
        })

        const dalamPengiriman = await this.prismaService.invoices.count({
            where: {
                status: 'Dalam Pengiriman',
                carts: {
                    storeId: store.id,
                },
            },
        })

        const pesananSelesai = await this.prismaService.invoices.count({
            where: {
                status: 'Pesanan Selesai',
                carts: {
                    storeId: store.id,
                },
            },
        })

        const dibatalkan = await this.prismaService.invoices.count({
            where: {
                status: 'Dibatlak',
                carts: {
                    storeId: store.id,
                },
            },
        })

        return {
            belumDibayar,
            pesananBaru,
            siapDikirim,
            dalamPengiriman,
            pesananSelesai,
            dibatalkan,
        }
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
