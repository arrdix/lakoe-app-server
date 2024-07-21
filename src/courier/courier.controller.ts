import { Controller, Post, Body } from '@nestjs/common'
import { CourierService } from './courier.service'
import { CreateCourierDto } from './dto/create-courier.dto'

@Controller('courier')
export class CourierController {
    constructor(private readonly courierService: CourierService) {}

    @Post()
    async create(@Body() createCourierDto: CreateCourierDto) {
        return await this.courierService.create(createCourierDto)
    }
}
