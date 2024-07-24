import { Controller, Post, Body, Res, Get, Param } from '@nestjs/common'
import { CourierService } from './courier.service'
import { CreateCourierDto } from './dto/create-courier.dto'
import { GetRatesDto } from './dto/get-rates.dto'
import { Response } from 'express'
import { ReqPickupDto } from 'src/courier/dto/req-pickup.dto'

@Controller('courier')
export class CourierController {
    constructor(private readonly courierService: CourierService) {}

    @Post()
    async create(@Body() createCourierDto: CreateCourierDto) {
        return await this.courierService.create(createCourierDto)
    }

    @Post('rates')
    async getRates(@Body() getRatesDto: GetRatesDto, @Res() res: Response) {
        const response = await this.courierService.getRates(getRatesDto)

        res.status(200).json(response)
    }

    @Post('pickup')
    async reqPickup(@Body() reqPickupDto: ReqPickupDto, @Res() res: Response) {
        console.log(reqPickupDto)
        const response = await this.courierService.reqPickup(reqPickupDto)

        res.status(200).json(response)
    }

    @Post('update')
    async statusUpdate(@Body() data, @Res() res: Response) {
        console.log('body', data)
        const response = await this.courierService.statusUpdate(
            data.courier_waybill_id,
            data.status
        )

        res.status(200).json(response)
    }

    @Get(':id')
    async findOne(@Param('id') id: number, @Res() res: Response) {
        const response = await this.courierService.findOne(+id)

        res.status(200).json(response)
    }
}
