import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class VariantOptionValueService {
    constructor(private readonly prismaService: PrismaService) {}

    findOneBySku(sku: string) {
        return this.prismaService.variantOptionValues.findFirst({
            where: {
                sku,
            },
        })
    }

    async updateStock(id: number, qty: number) {
        const requestedVariantOptionValue = await this.prismaService.variantOptionValues.findFirst({
            where: {
                id,
            },
        })

        console.log(requestedVariantOptionValue.stock)
        console.log(qty)

        console.log(typeof requestedVariantOptionValue.stock)
        console.log(typeof qty)
        const updatedStock = requestedVariantOptionValue.stock - qty

        return this.prismaService.variantOptionValues.update({
            where: {
                id,
            },
            data: {
                stock: updatedStock,
            },
        })
    }
}
