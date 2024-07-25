import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { CreateVariantDto } from './dto/create-variant.dto'
import { UpdateVariantDto } from './dto/update-variant.dto'

@Injectable()
export class VariantService {
    constructor(private readonly prismaService: PrismaService) {}

    async create(createVariantDto: CreateVariantDto) {
        return this.prismaService.variants.create({
            data: {
                name: createVariantDto.name,
                isActive: createVariantDto.isActive,
                variantOptions: {
                    create: createVariantDto.variantOptions.map((option) => ({
                        name: option.name,
                        variantOptionValue: {
                            create: option.variantOptionValue,
                        },
                    })),
                },
            },
            include: {
                variantOptions: {
                    include: {
                        variantOptionValue: true,
                    },
                },
            },
        })
    }

    async findAll() {
        return this.prismaService.variants.findMany({
            include: {
                variantOptions: {
                    include: {
                        variantOptionValue: true,
                    },
                },
            },
        })
    }

    async findOne(id: number) {
        return this.prismaService.variants.findUnique({
            where: { id },
            include: {
                variantOptions: {
                    include: {
                        variantOptionValue: true,
                    },
                },
            },
        })
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async update(id: number, updateVariantDto: UpdateVariantDto) {
        const existingVariant = await this.prismaService.variants.findUnique({
            where: { id },
            include: {
                variantOptions: true,
            },
        })

        if (!existingVariant) {
            throw new Error(`Variant with ID ${id} not found`)
        }

        // const updateVariantOptions = updateVariantDto.variantOptions?.map((option) => {
        // return {
        //     where: { id: option.id },
        //     data: {
        //         name: option.name,
        //         variantOptionValue: {
        //             update: option.variantOptionValue,
        //         },
        //     },
        // }
        // })

        // return this.prismaService.variants.update({
        //     where: { id },
        //     data: {
        //         name: updateVariantDto.name,
        //         isActive: updateVariantDto.isActive,
        //         productId: updateVariantDto.productId,
        //         variantOptions: {
        //             updateMany: updateVariantOptions,
        //         },
        //     },
        //     include: {
        //         variantOptions: {
        //             include: {
        //                 variantOptionValue: true,
        //             },
        //         },
        //     },
        // })
    }

    async remove(id: number) {
        const variant = await this.prismaService.variants.findUnique({
            where: { id },
            include: {
                variantOptions: true,
            },
        })

        if (!variant) {
            throw new Error(`Variant with ID ${id} not found`)
        }

        await this.prismaService.variantOptions.deleteMany({
            where: { variantId: id },
        })

        return this.prismaService.variants.delete({
            where: { id },
        })
    }
}
