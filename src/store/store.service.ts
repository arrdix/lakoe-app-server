import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class StoreService {
  constructor(
    private prisma: PrismaService,
    private cloudinary: CloudinaryService,
  ) { }

  async create(
    logoFile: Express.Multer.File,
    bannerFile: Express.Multer.File,
    createStoreDto: CreateStoreDto
  ) {
    const logoUploadResult = await this.cloudinary.uploadFile(logoFile);
    const bannerUploadResult = await this.cloudinary.uploadFile(bannerFile);

    const store = await this.prisma.stores.create({
      data: {
        ...createStoreDto,
        logoAttachment: logoUploadResult.secure_url,
        bannerAttachment: bannerUploadResult.secure_url,
      }
    });

    return store;
  }
}
