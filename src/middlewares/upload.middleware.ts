// import { Controller, Post, UploadedFiles, UseInterceptors, Body } from '@nestjs/common';
// import { FileFieldsInterceptor } from '@nestjs/platform-express';
// import { StoreService } from '../store/store.service';
// import { CreateStoreDto } from '../store/dto/create-store.dto';

// @Controller('store')
// export class StoreController {
//     constructor(private readonly storeService: StoreService) { }

//     @Post()
//     @UseInterceptors(FileFieldsInterceptor([
//         { name: 'logoAttachment', maxCount: 1 },
//         { name: 'bannerAttachment', maxCount: 1 }
//     ]))
//     async create(
//         @UploadedFiles() files: { logoAttachment?: Express.Multer.File[], bannerAttachment?: Express.Multer.File[] },
//         @Body() createStoreDto: CreateStoreDto
//     ) {
//         const logoFile = files.logoAttachment ? files.logoAttachment[0] : null;
//         const bannerFile = files.bannerAttachment ? files.bannerAttachment[0] : null;

//         return this.storeService.create(logoFile, bannerFile, createStoreDto);
//     }
// }
