import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
  Put,
  Param,
  Body,
  Get,
  Res,
} from "@nestjs/common";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { Response } from 'express'
import { StoreService } from "./store.service";
import { CreateStoreDto } from "./dto/create-store.dto";
import { CreateLocationDto } from "./dto/create-location.dto";
import { UpdateStoreDto } from "./dto/update-store.dto";

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) { }

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: "logoAttachment", maxCount: 1 },
      { name: "bannerAttachment", maxCount: 1 },
    ])
  )
  async create(
    @UploadedFiles()
    files: {
      logoAttachment?: Express.Multer.File[];
      bannerAttachment?: Express.Multer.File[];
    },
    @Body() createStoreDto: CreateStoreDto, @Res() res: Response
  ) {
    const loggedUserId = res.locals.user.id
    const logoFile = files.logoAttachment ? files.logoAttachment[0] : null;
    const bannerFile = files.bannerAttachment
      ? files.bannerAttachment[0]
      : null;
    const response = this.storeService.create(logoFile, bannerFile, createStoreDto, loggedUserId);
    res.status(200).json(response)
  }

  // @Put(':id')
  // @UseInterceptors(
  //   FileFieldsInterceptor([
  //     { name: 'logoAttachment', maxCount: 1 },
  //     { name: 'bannerAttachment', maxCount: 1 },
  //   ]),
  // )
  // async update(
  //   @UploadedFiles()
  //   files: {
  //     logoAttachment?: Express.Multer.File[];
  //     bannerAttachment?: Express.Multer.File[];
  //   },
  //   @Body() updateStoreDto: UpdateStoreDto,
  //   @Param('id') storeId: number,
  //   @Res() res: Response,
  // ) {
  //   const logoFile = files.logoAttachment ? files.logoAttachment[0] : null;
  //   const bannerFile = files.bannerAttachment ? files.bannerAttachment[0] : null;
  //   const response = await this.storeService.update(logoFile, bannerFile, updateStoreDto, storeId);
  //   res.status(200).json(response);
  // }

  // create location
  @Post("create-location")
  createLocation(@Body() data: CreateLocationDto) {
    return this.storeService.createLocation(data);
    // return(data)
  }

  // find my store
  @Get("myStore")
  async findMyStore(@Res() res: Response) {
    const loggedUserId = res.locals.user.id
    console.log(loggedUserId)
    const response = await this.storeService.findStore(loggedUserId)

    res.status(200).json(response)
  }
}
