import { Injectable } from '@nestjs/common'
import { UpdateUserDto } from './dto/update-user.dto'
import { PrismaService } from '../prisma/prisma.service'
import { CartService } from '../cart/cart.service'

@Injectable()
export class UserService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly cartService: CartService
    ) {}

    async getLoggedUser(id: number) {
        const loggedUser = await this.prismaService.users.findFirst({
            where: {
                id,
            },
            include: {
                Stores: true,
            },
        })

        delete loggedUser.password
        delete loggedUser.createdAt
        delete loggedUser.updatedAt

        return loggedUser
    }

    async findOne(id: number) {
        const rawUser = await this.prismaService.users.findFirst({
            where: {
                id,
            },
            include: {
                carts: true,
            },
        })

        return {
            ...rawUser,
            phone: rawUser.phone.toString(),
        }
    }

    async update(id: number, updateUserDto: UpdateUserDto) {
        return await this.prismaService.users.update({
            where: {
                id,
            },
            data: updateUserDto,
        })
    }

    async remove(id: number) {
        return await this.prismaService.users.delete({
            where: {
                id,
            },
        })
    }
}
