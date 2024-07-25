import { StoreService } from './../store/store.service'
import { Injectable } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { UpdateVariantOptionValueDto } from 'src/variant-option-value/dto/update-variant-option-value.dto'
import { CategoryService } from 'src/category/category.service'

@Injectable()
export class ProductService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly categoryService: CategoryService,
        private readonly storeService: StoreService
    ) {}

    async create(loggedUserId: number, createProductDto: CreateProductDto) {
        const requestedCategory = await this.categoryService.findOneByName(
            createProductDto.categoryName
        )

        const associatedStore = await this.storeService.findStore(loggedUserId)

        return await this.prismaService.products.create({
            data: {
                name: createProductDto.name,
                description: createProductDto.description,
                attachments: createProductDto.attachments,
                isActive: createProductDto.isActive,
                minimumOrder: +createProductDto.minimumOrder,
                storeId: associatedStore.id,
                categoryId: requestedCategory.id,
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

    async findAllBySKU(userId: number) {
        const store = await this.storeService.findStore(userId)

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
            where: {
                variantOptions: {
                    variant: {
                        products: {
                            storeId: store.id,
                        },
                    },
                },
            },
            orderBy: {
                id: 'asc',
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

    async removeBySKU(sku: string) {
        return await this.prismaService.variantOptionValues.delete({
            where: {
                sku,
            },
        })
    }

    async removeManyBySKU(skus: string[]) {
        return await this.prismaService.variantOptionValues.deleteMany({
            where: {
                sku: {
                    in: skus,
                },
            },
        })
    }

    async activedProductBySKU(sku: string, data: boolean) {
        return await this.prismaService.variantOptionValues.update({
            where: {
                sku,
            },
            data: {
                isActive: data,
            },
        })
    }

    async nonActivedManyBySKU(skus: string[]) {
        return await this.prismaService.variantOptionValues.updateMany({
            where: {
                sku: {
                    in: skus,
                },
            },
            data: {
                isActive: false,
            },
        })
    }

    async updateProductBySKU(sku: string, data: UpdateVariantOptionValueDto) {
        return await this.prismaService.variantOptionValues.update({
            where: {
                sku,
            },
            data: {
                sku: data.sku,
                price: data.price,
                stock: data.stock,
            },
        })
    }
}
