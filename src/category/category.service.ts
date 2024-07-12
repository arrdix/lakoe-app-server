import { CreateCategoryDto } from './dto/create-category.dto'
import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class CategoryService {
    constructor(private readonly prismaService: PrismaService) {}

    create(createCategoryDto: CreateCategoryDto) {
        return this.prismaService.categories.create({
            data: createCategoryDto,
        })
    }
}
