import { Module } from '@nestjs/common'
import { ProductService } from './product.service'
import { ProductController } from './product.controller'
import { PrismaService } from '../prisma/prisma.service'
import { CloudinaryService } from '../cloudinary/cloudinary.service'
import { CategoryService } from '../category/category.service'
import { StoreService } from '../store/store.service'

@Module({
    controllers: [ProductController],
    providers: [ProductService, PrismaService, CloudinaryService, CategoryService, StoreService],
})
export class ProductModule {}
