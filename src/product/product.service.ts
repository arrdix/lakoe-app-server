import { Injectable } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class ProductService {
    constructor(private readonly prismaService: PrismaService) {}

    async create(createProductDto: CreateProductDto) {
        return await this.prismaService.products.create({
            data: {
                name: createProductDto.name,
                description: createProductDto.description,
                attachments: createProductDto.attachments,
                isActive: createProductDto.isActive,
                minimumOrder: +createProductDto.minimumOrder,
                storeId: +createProductDto.storeId,
                categoryId: +createProductDto.categoryId,
                url: createProductDto.url,
                variant: {
                    create: {
                        name: createProductDto.variant.name,
                        isActive: createProductDto.variant.isActive,
                        variantOptions: {
                            create: createProductDto.variant.variantOptions.map((option) => ({
                                name: option.name,
                                variantOptionValue: {
                                    create: {
                                        sku: option.variantOptionValue.sku,
                                        weight: +option.variantOptionValue.weight,
                                        stock: +option.variantOptionValue.stock,
                                        price: +option.variantOptionValue.price,
                                        isActive: JSON.parse(option.variantOptionValue.isActive),
                                    },
                                },
                            })),
                        },
                    },
                },
            },
            include: {
                variant: {
                    include: {
                        variantOptions: {
                            include: {
                                variantOptionValue: true,
                            },
                        },
                    },
                },
            },
        })
    }

    async findAllByID() {
        return this.prismaService.products.findMany({
            include: {
                variant: {
                    include: {
                        variantOptions: {
                            include: {
                                variantOptionValue: {
                                    select: {
                                        id: true,
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
                category: {
                    select: {
                        name: true,
                    },
                },
            },
        })
    }

    async findOneByID(id: number) {
        return this.prismaService.products.findFirst({
            where: {
                id,
            },
            include: {
                variant: {
                    include: {
                        variantOptions: {
                            include: {
                                variantOptionValue: {
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
                category: {
                    select: {
                        name: true,
                    },
                },
            },
        })
    }

    async findAllBySKU() {
        const products = await this.prismaService.variantOptionValues.findMany({
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
        })

        return products.map((product) => {
            const {
                sku: productSKU,
                weight,
                stock,
                price,
                isActive,
                variantOptions: {
                    id: variantOptionId,
                    name: variantOptionName,
                    variantOptionValuesId,
                    variant: {
                        id: variantId,
                        name: variantName,
                        isActive: variantIsActive,
                        products: {
                            id: productId,
                            name: productName,
                            description,
                            attachments,
                            isActive: productIsActive,
                            minimumOrder,
                            storeId,
                        },
                    },
                },
            } = product

            return {
                id: productId,
                name: productName,
                description,
                attachments,
                isActive: productIsActive,
                minimumOrder,
                storeId,
                variant: {
                    id: variantId,
                    name: variantName,
                    isActive: variantIsActive,
                    productId,
                    variantOption: {
                        id: variantOptionId,
                        name: variantOptionName,
                        variantId,
                        variantOptionValue: {
                            id: variantOptionValuesId,
                            sku: productSKU,
                            weight,
                            stock,
                            price,
                            isActive,
                        },
                    },
                },
            }
        })
    }

    async findOneBySKU(sku: string) {
        const product = await this.prismaService.variantOptionValues.findFirst({
            where: {
                sku,
            },
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
        })

        const {
            sku: productSKU,
            weight,
            stock,
            price,
            isActive,
            variantOptions: {
                id: variantOptionId,
                name: variantOptionName,
                variantOptionValuesId,
                variant: {
                    id: variantId,
                    name: variantName,
                    isActive: variantIsActive,
                    products: {
                        id: productId,
                        name: productName,
                        description,
                        attachments,
                        isActive: productIsActive,
                        minimumOrder,
                        storeId,
                    },
                },
            },
        } = product

        return {
            id: productId,
            name: productName,
            description,
            attachments,
            isActive: productIsActive,
            minimumOrder,
            storeId,
            variant: {
                id: variantId,
                name: variantName,
                isActive: variantIsActive,
                productId,
                variantOption: {
                    id: variantOptionId,
                    name: variantOptionName,
                    variantId,
                    variantOptionValue: {
                        id: variantOptionValuesId,
                        sku: productSKU,
                        weight,
                        stock,
                        price,
                        isActive,
                    },
                },
            },
        }
    }

    async update(id: number, updateProductDto: UpdateProductDto) {
        console.log(id, updateProductDto)
    }

    async remove(id: number) {
        return await this.prismaService.products.delete({
            where: {
                id,
            },
        })
    }
}
