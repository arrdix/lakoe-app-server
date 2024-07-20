import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common'
import { CartItemService } from './cart-item.service'
import { CreateCartItemDto } from './dto/create-cart-item.dto'
import { UpdateCartItemDto } from './dto/update-cart-item.dto'
import { Response } from 'express'

@Controller('cart-item')
export class CartItemController {
    constructor(private readonly cartItemService: CartItemService) {}

    @Post()
    async create(@Body() createCartItemDto: CreateCartItemDto, @Res() res: Response) {
        const loggedUserId = res.locals.user.id
        const response = await this.cartItemService.create({
            ...createCartItemDto,
            userId: loggedUserId,
        })

        res.status(200).json(response)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.cartItemService.findOne(+id)
    }

    // @Patch(':id')
    // update(@Param('id') id: string, @Body() updateCartItemDto: UpdateCartItemDto) {
    //     return this.cartItemService.update(+id, updateCartItemDto)
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return this.cartItemService.remove(+id)
    // }
}
