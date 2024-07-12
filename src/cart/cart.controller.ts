import { Controller, Get, Param } from '@nestjs/common'
import { CartService } from 'src/cart/cart.service'

@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService) {}

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.cartService.findOne(+id)
    }
}
