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
                ...createProductDto,
                variant: {
                    create: {
                        ...createProductDto.variant,
                        variantOptions: {
                            create: createProductDto.variant.variantOptions.map((option) => ({
                                ...option,
                                variantOptionValue: {
                                    create: option.variantOptionValue,
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

    async findAll() {
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

    async findOne(sku: string) {
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
        // return await this.prismaService.products.update({
        //     where: {
        //         id,
        //     },
        //     data: updateProductDto,
        // })
    }

    async remove(id: number) {
        return await this.prismaService.products.delete({
            where: {
                id,
            },
        })
    }
}
