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
    Header,
} from '@nestjs/common'
import { ProductService } from './product.service'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { FilesInterceptor } from '@nestjs/platform-express'
import { CloudinaryService } from 'src/cloudinary/cloudinary.service'
import { SkusDto } from './dto/find-skus.dto'
import { UpdateVariantOptionValueDto } from 'src/variant-option-value/dto/update-variant-option-value.dto'

@Controller('product')
export class ProductController {
    constructor(
        private readonly productService: ProductService,
        private readonly cloudinaryService: CloudinaryService
    ) {}

    @Post()
    @Header('content-type', 'multipart/form-data')
    @UseInterceptors(FilesInterceptor('attachments'))
    async create(
        @Body() createProductDto: CreateProductDto,
        @UploadedFiles() files: Express.Multer.File[]
    ) {
        console.log(files)
        console.log(JSON.stringify(createProductDto))

        const attachments = []

        for (const file of files) {
            const imageUrl = await this.cloudinaryService.uploadFile(file)
            attachments.push(imageUrl.url)
        }

        if (!attachments.length) {
            return {
                status: 'Failed!',
            }
        }

        return await this.productService.create({
            ...createProductDto,
            attachments,
        })
    }

    @Get('id')
    findAllByID() {
        return this.productService.findAllByID()
    }

    @Get('/id/:id')
    findOneByID(@Param('id') id: number) {
        return this.productService.findOneByID(+id)
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

    // hapus persatuan sku
    @Delete('sku/:sku')
    removeBySKU(@Param('sku') sku: string) {
        return this.productService.removeBySKU(sku)
    }

    // hapus banyak sku
    @Delete('delete/skus')
    removeManyBySKU(@Body() skus: SkusDto) {
        console.log(skus.skus)
        return this.productService.removeManyBySKU(skus.skus)
        // return(skus)
    }

    // nonaktif atau aktifkan produk per sku
    @Patch('update-isActive/:sku')
    async activedProductBySKU(@Param('sku') sku: string) {
        const dataProduct = await this.productService.findOneBySKU(sku)
        const data = !dataProduct.variant.variantOption.variantOptionValue.isActive
        return this.productService.activedProductBySKU(sku, data)
        // return(skus)
    }

    // nonaktifkan banyak produk sku
    @Patch('nonActived/skus')
    nonActivedManyBySKU(@Body() skus: SkusDto) {
        console.log(skus.skus)
        return this.productService.nonActivedManyBySKU(skus.skus)
        // return(skus)
    }

    // update produk per sku
    @Patch('update-bySKU/:sku')
    updateBySKU(@Param('sku') sku: string, @Body() data: UpdateVariantOptionValueDto) {
        console.log(data)
        return this.productService.updateProductBySKU(sku, data)
        // return(data)
    }
}
