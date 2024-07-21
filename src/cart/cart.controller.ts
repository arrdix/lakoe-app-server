import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common'
import { Response } from 'express'
import { CartService } from 'src/cart/cart.service'
import { CreateCartDto } from 'src/cart/dto/create-cart.dto'

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) {}

    @Post()
    async create(@Body() createCartDto: CreateCartDto, @Res() res: Response) {
        const loggedUserId = res.locals.user.id
        const response = await this.cartService.create({
            ...createCartDto,
            userId: loggedUserId,
        })

        return res.status(200).json(response)
    }

    @Get('/uncomplete/:storeId')
    async findOneUncomplete(@Param('storeId') storeId: number, @Res() res: Response) {
        const loggedUserId = res.locals.user.id
        const response = await this.cartService.findOneUncomplete(loggedUserId, +storeId)

        return res.status(200).json(response)
    }

    @Get('/uncomplete')
    async findAllUncomplete(@Res() res: Response) {
        const loggedUserId = res.locals.user.id
        const response = await this.cartService.findAllUncomplete(loggedUserId)

        return res.status(200).json(response)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.cartService.findOne(+id)
    }
}
