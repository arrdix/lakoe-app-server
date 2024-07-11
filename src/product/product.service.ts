import { Injectable } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class ProductService {
    constructor(private readonly prismaService: PrismaService) {}

    create(createProductDto: CreateProductDto) {
        return this.prismaService.products.create({
            data: createProductDto,
        })
    }

    findAll() {
        return this.prismaService.products.findMany({
            include: {
                variants: {
                    include: {
                        variantOptions: {
                            include: {
                                variantOptionValues: {
                                    select: {
                                        sku: true,
                                        price: true,
                                        weight: true,
                                        stock: true,
                                        isActive: true,
                                        cartItems: true,
                                    },
                                },
                            },
                        },
                    },
                },
                categories: {
                    select: {
                        name: true,
                    },
                },
            },
        })
    }

    findOne(id: number) {
        return this.prismaService.products.findFirst({
            where: {
                id,
            },
            include: {
                variants: {
                    include: {
                        variantOptions: {
                            include: {
                                variantOptionValues: {
                                    select: {
                                        sku: true,
                                        price: true,
                                        weight: true,
                                        stock: true,
                                        isActive: true,
                                        cartItems: true,
                                    },
                                },
                            },
                        },
                    },
                },
                categories: {
                    select: {
                        name: true,
                    },
                },
            },
        })
    }

    update(id: number, updateProductDto: UpdateProductDto) {
        return this.prismaService.products.update({
            where: {
                id,
            },
            data: updateProductDto,
        })
    }

    remove(id: number) {
        return this.prismaService.products.delete({
            where: {
                id,
            },
        })
    }
}
