import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { User } from 'src/types/user-type'
import { CartService } from 'src/cart/cart.service'

@Injectable()
export class UserService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly cartService: CartService
    ) {}

    async create(createUserDto: CreateUserDto) {
        // create new user
        const createdUser: User = await this.prismaService.users.create({
            data: createUserDto,
        })

        // create profile for new user
        this.createProfile(createdUser.id)

        // create default cart for new user
        this.cartService.create({
            price: 0,
            discount: 0,
            userId: createdUser.id,
            storeId: null,
        })

        return {
            status: 'Ok!',
        }
    }

    async createProfile(userId: number) {
        return await this.prismaService.profile.create({
            data: {
                userId,
            },
        })
    }

    findAll() {
        return `This action returns all user`
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
