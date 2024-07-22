import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
  Body,
  Get,
  Res,
} from "@nestjs/common";
import { FileFieldsInterceptor } from "@nestjs/platform-express";
import { Response } from 'express'
import { StoreService } from "./store.service";
import { CreateStoreDto } from "./dto/create-store.dto";
import { CreateLocationDto } from "./dto/create-location.dto";

@Controller("store")
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

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
    @Body() createStoreDto: CreateStoreDto
  ) {
    const logoFile = files.logoAttachment ? files.logoAttachment[0] : null;
    const bannerFile = files.bannerAttachment
      ? files.bannerAttachment[0]
      : null;

    return this.storeService.create(logoFile, bannerFile, createStoreDto);
  }

  // create location
  @Post("create-location")
  createLocation(@Body() data: CreateLocationDto) {
    return this.storeService.createLocation(data);
    // return(data)
  }

  // find my store
  @Get("myStore")
  findMyStore(@Res() res: Response) {
    const loggedUserId = res.locals.user.id
    console.log(loggedUserId)
    return this.storeService.findStore(loggedUserId)
  }
}
