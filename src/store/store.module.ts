import { Module } from '@nestjs/common'
import { StoreService } from './store.service'
import { StoreController } from './store.controller'
import { PrismaService } from '../prisma/prisma.service'
import { CloudinaryModule } from '../cloudinary/cloudinary.module'
import { CloudinaryService } from '../cloudinary/cloudinary.service'

@Module({
    imports: [CloudinaryModule],
    controllers: [StoreController],
    providers: [StoreService, PrismaService, CloudinaryService],
})
export class StoreModule {}
