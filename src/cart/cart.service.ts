import { Injectable } from '@nestjs/common'
import { CreateCartDto } from 'src/cart/dto/create-cart.dto'
import { UpdateCartDto } from 'src/cart/dto/update-cart.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class CartService {
    constructor(private readonly prismaService: PrismaService) {}

    async create(createCartDto: CreateCartDto) {
        return await this.prismaService.carts.create({
            data: createCartDto,
        })
    }

    async findOne(id: number) {
        return await this.prismaService.carts.findFirst({
            where: {
                id,
            },
            include: {
                cartItems: true,
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
