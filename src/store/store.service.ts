import { Injectable } from '@nestjs/common'
import { CreateStoreDto } from './dto/create-store.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { CloudinaryService } from 'src/cloudinary/cloudinary.service'
import { CreateLocationDto } from './dto/create-location.dto'

@Injectable()
export class StoreService {
    constructor(
        private prisma: PrismaService,
        private cloudinary: CloudinaryService
    ) {}

    async create(
        logoFile: Express.Multer.File,
        bannerFile: Express.Multer.File,
        createStoreDto: CreateStoreDto
    ) {
        const logoUploadResult = await this.cloudinary.uploadFile(logoFile)
        const bannerUploadResult = await this.cloudinary.uploadFile(bannerFile)

        const store = await this.prisma.stores.create({
            data: {
                ...createStoreDto,
                logoAttachment: logoUploadResult.secure_url,
                bannerAttachment: bannerUploadResult.secure_url,
            },
        })

        return store
    }

    async createLocation(CreateLocationDto: CreateLocationDto) {
        const location = await this.prisma.locations.create({
            data: CreateLocationDto,
        })

        return location
    }
    async findStore(userId: number) {
        const store = await this.prisma.stores.findFirst({
            where: {
                userId: userId,
            },
        })

        console.log(store)

        return store
    }
}
