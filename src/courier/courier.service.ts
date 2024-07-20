import { Injectable } from '@nestjs/common'
import { CreateCourierDto } from './dto/create-courier.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class CourierService {
    constructor(private readonly prismaService: PrismaService) {}

    async create(createCourierDto: CreateCourierDto) {
        return await this.prismaService.couriers.create({
            data: createCourierDto,
        })
    }
}
