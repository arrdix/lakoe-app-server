import { UserService } from './../user/user.service'
import { Injectable } from '@nestjs/common'
import { CreateCartItemDto } from './dto/create-cart-item.dto'
import { UpdateCartItemDto } from './dto/update-cart-item.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { User } from 'src/types/user-type'
import { CartItem } from 'src/types/cart-item-type'
import { CartService } from 'src/cart/cart.service'

@Injectable()
export class CartItemService {
    constructor(
        private readonly prismaService: PrismaService,
        private readonly cartService: CartService,
        private readonly userService: UserService
    ) {}

    async create(createCartItemDto: CreateCartItemDto) {
        /**
         * Get cart that associated with user (will be logged user)
         *
         * TODO: refactor to use logged user id instead of static id (9)
         */
        const user: User = await this.userService.findOne(9)
        const cartId = user.carts[0].id
        const userId = user.carts[0].userId
        const cartPrice = user.carts[0].price

        // sum price on cart everytime user create cart item
        await this.cartService.update(cartId, {
            price: cartPrice + createCartItemDto.price,
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

    async findOne(id: number) {
        return await this.prismaService.cartItems.findFirst({
            where: {
                id,
            },
        })
    }

    async update(id: number, updateCartItemDto: UpdateCartItemDto) {
        /**
         * Get cart that associated with user (will be logged user)
         *
         * TODO: refactor to use logged user id instead of static id (9)
         */
        const user: User = await this.userService.findOne(9)
        const cartId = user.carts[0].id
        const cartPrice = user.carts[0].price

        // Get requested cart item
        const cartItem = await this.findOne(id)

        // determine update method for cart price
        if (updateCartItemDto.price > cartItem.price) {
            this.cartService.update(cartId, {
                // prettier-ignore
                price: (cartPrice - cartItem.price) + updateCartItemDto.price,
            })
        } else {
            this.cartService.update(cartId, {
                // prettier-ignore
                price: (cartPrice - cartItem.price) - updateCartItemDto.price,
            })
        }

        // update cart item entry
        return await this.prismaService.cartItems.update({
            where: {
                id,
            },
            data: updateCartItemDto,
        })
    }

    async remove(id: number) {
        // get the requested cart item
        const cartItem: CartItem = await this.findOne(id)

        /**
         * Get cart that associated with user (will be logged user)
         *
         * TODO: refactor to use logged user id instead of static id (9)
         */
        const user: User = await this.userService.findOne(9)
        const cartId = user.carts[0].id
        const cartPrice = user.carts[0].price

        // minus price on cart everytime user create cart item
        await this.cartService.update(cartId, {
            price: cartPrice - cartItem.price,
        })

        // delete cart item entry
        return await this.prismaService.cartItems.delete({
            where: {
                id,
            },
        })
    }
}
