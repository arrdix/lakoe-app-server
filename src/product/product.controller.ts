import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseInterceptors,
    UploadedFiles,
} from '@nestjs/common'
import { ProductService } from './product.service'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { FilesInterceptor } from '@nestjs/platform-express'
import { CloudinaryService } from 'src/cloudinary/cloudinary.service'

@Controller('product')
export class ProductController {
    constructor(
        private readonly productService: ProductService,
        private readonly cloudinaryService: CloudinaryService
    ) {}

    @Post()
    @UseInterceptors(FilesInterceptor('attachments'))
    create(
        @Body() createProductDto: CreateProductDto,
        @UploadedFiles() files: Array<Express.Multer.File>
    ) {
        console.log(JSON.stringify(createProductDto, null, 2))
        // this.cloudinaryService.uploadFile(files)
        // return this.productService.create(createProductDto)
    }

    @Get('id')
    findAllByID() {
        return this.productService.findAllByID()
    }

    @Get('/id/:id')
    findOneByID(@Param('sku') id: number) {
        return this.productService.findOneByID(id)
    }

    @Get('sku')
    findAllBySKU() {
        return this.productService.findAllBySKU()
    }

    @Get('/sku/:sku')
    findOneBySKU(@Param('sku') sku: string) {
        return this.productService.findOneBySKU(sku)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productService.update(+id, updateProductDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productService.remove(+id)
    }
}
