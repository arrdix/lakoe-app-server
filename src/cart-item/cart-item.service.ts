import { UserService } from './../user/user.service'
import { Injectable } from '@nestjs/common'
import { CreateCartItemDto } from './dto/create-cart-item.dto'
import { UpdateCartItemDto } from './dto/update-cart-item.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { CartService } from 'src/cart/cart.service'
import { User } from 'src/types/user-type'

@Injectable()
export class CartItemService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly cartService: CartService,
        private readonly userService: UserService
    ) {}

    async create(createCartItemDto: CreateCartItemDto) {
        // TODO: refactor to use logged user id instead of static id
        const user: User = await this.userService.findOne(9)
        const cartId = user.carts[0].id
        const userId = user.carts[0].userId
        const cartPrice = user.carts[0].price

        // update price on cart everytime user create cart item
        await this.prismaService.carts.update({
            where: {
                id: cartId,
            },
            data: {
                price: cartPrice + createCartItemDto.price,
            },
        })

        // create cart item entry
        return await this.prismaService.cartItems.create({
            data: {
                ...createCartItemDto,
                userId,
                cartId,
            },
        })
    }

    findAll() {
        return `This action returns all cartItem`
    }

    findOne(id: number) {
        return `This action returns a #${id} cartItem`
    }

    update(id: number, updateCartItemDto: UpdateCartItemDto) {
        console.log(updateCartItemDto)
        return `This action updates a #${id} cartItem`
    }

    remove(id: number) {
        return `This action removes a #${id} cartItem`
    }
}
