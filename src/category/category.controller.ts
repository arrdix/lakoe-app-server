import { CategoryService } from './category.service'
import { Body, Controller, Post } from '@nestjs/common'
import { CreateCategoryDto } from 'src/category/dto/create-category.dto'

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Post()
    create(@Body() createCategoryDto: CreateCategoryDto) {
        return this.categoryService.create(createCategoryDto)
    }
}
