import { Injectable } from '@nestjs/common'
import { CreateStoreDto } from './dto/create-store.dto'
import { PrismaService } from 'src/prisma/prisma.service'
import { CloudinaryService } from 'src/cloudinary/cloudinary.service'
import { CreateLocationDto } from './dto/create-location.dto'
import { UpdateStoreDto } from './dto/update-store.dto'
import { Prisma } from '@prisma/client'

@Injectable()
export class StoreService {
    constructor(
        private prisma: PrismaService,
        private cloudinary: CloudinaryService
    ) {}

    async create(
        logoFile: Express.Multer.File,
        bannerFile: Express.Multer.File,
        createStoreDto: CreateStoreDto,
        loggedUserId: number
    ) {
        const logoUploadResult = await this.cloudinary.uploadFile(logoFile)
        const bannerUploadResult = await this.cloudinary.uploadFile(bannerFile)

        const store = await this.prisma.stores.create({
            data: {
                ...createStoreDto,
                logoAttachment: logoUploadResult.secure_url,
                bannerAttachment: bannerUploadResult.secure_url,
                userId: loggedUserId,
            },
        })

        return store
    }

    async update(
        storeId: number,
        logoFile: Express.Multer.File | null,
        bannerFile: Express.Multer.File | null,
        updateStoreDto: UpdateStoreDto
    ) {
        const updateData: Prisma.StoresUpdateInput = {
            ...updateStoreDto,
        }

        // Jika ada logo baru, upload dan perbarui URL logo
        if (logoFile) {
            const logoUploadResult = await this.cloudinary.uploadFile(logoFile)
            updateData.logoAttachment = logoUploadResult.secure_url
        }

        // Jika ada banner baru, upload dan perbarui URL banner
        if (bannerFile) {
            const bannerUploadResult = await this.cloudinary.uploadFile(bannerFile)
            updateData.bannerAttachment = bannerUploadResult.secure_url
        }

        // Perbarui store di database
        const updatedStore = await this.prisma.stores.update({
            where: { id: storeId },
            data: updateData,
        })

        return updatedStore
    }

    async createLocation(CreateLocationDto: CreateLocationDto) {
        const location = await this.prisma.locations.create({
            data: CreateLocationDto,
        })

        return location
    }

    async findStore(userId: number) {
        const store = await this.prisma.stores.findUnique({
            where: {
                userId: userId,
            },
        })

        console.log(store)

        if (!store) {
            throw new Error()
        }

        return store
    }

    async findStoreById(id: number) {
        const store = await this.prisma.stores.findFirst({
            where: {
                id,
            },
        })

        return store
    }

    async findLocation(profileId: number) {
        const location = await this.prisma.locations.findFirst({
            where: {
                profileId,
            },
        })
        return location
    }

    async deleteLocation(profileId: number) {
        const store = await this.prisma.locations.deleteMany({
            where: {
                profileId,
            },
        })
        return store
    }
}
