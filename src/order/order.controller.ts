import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common'
import { OrderService } from './order.service'
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'
import { Response } from 'express'

@Controller('order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Post()
    async createDirectOrder(@Body() createOrderDto: CreateOrderDto, @Res() res: Response) {
        const loggedUserId = res.locals.user.id
        const response = await this.orderService.create({
            ...createOrderDto,
            userId: loggedUserId,
        })

        res.status(200).json(response)
    }

    @Get()
    findAll() {
        return this.orderService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.orderService.findOne(+id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
        return this.orderService.update(+id, updateOrderDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.orderService.remove(+id)
    }
}
