import { Injectable } from '@nestjs/common'
import { CreateCartDto } from './dto/create-cart.dto'
import { UpdateCartDto } from './dto/update-cart.dto'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class CartService {
    constructor(private readonly prismaService: PrismaService) {}

    async create(createCartDto: CreateCartDto) {
        return await this.prismaService.carts.create({
            data: {
                ...createCartDto,
                price: createCartDto.price || 0,
            },
        })
    }

    async findOne(id: number) {
        return await this.prismaService.carts.findFirst({
            where: {
                id,
            },
            include: {
                cartItems: {
                    include: {
                        variantOptionValues: true,
                    },
                },
            },
        })
    }

    async findOneUncomplete(userId: number, storeId: number) {
        return await this.prismaService.carts.findFirst({
            where: {
                userId: userId,
                isComplete: false,
                storeId: storeId,
            },
            include: {
                cartItems: {
                    include: {
                        variantOptionValues: true,
                    },
                },
            },
        })
    }

    async findAllUncomplete(userId: number) {
        return await this.prismaService.carts.findMany({
            where: {
                userId: userId,
                isComplete: false,
            },
            include: {
                cartItems: {
                    include: {
                        variantOptionValues: true,
                    },
                },
            },
        })
    }

    async update(id: number, updateCartDto: UpdateCartDto) {
        return await this.prismaService.carts.update({
            where: {
                id,
            },
            data: updateCartDto,
        })
    }
}
