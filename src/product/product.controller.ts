import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { DeleteProductDto } from "./dto/delete-product.dto";

@Controller("product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get("id")
  findAllByID() {
    return this.productService.findAllByID();
  }

  @Get("/id/:id")
  findOneByID(@Param("sku") id: number) {
    return this.productService.findOneByID(id);
  }

  @Get("sku")
  findAllBySKU() {
    return this.productService.findAllBySKU();
  }

  @Get("/sku/:sku")
  findOneBySKU(@Param("sku") sku: string) {
    return this.productService.findOneBySKU(sku);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.productService.remove(+id);
  }

  @Delete("sku/:sku")
  removeBySKU(@Param("sku") sku: string) {
    return this.productService.removeBySKU(sku);
  }

  @Delete("delete/skus")
  removeManyBySKU(@Body()skus:DeleteProductDto) {
    console.log(skus.skus)
    return this.productService.removeManyBySKU(skus.skus)
    // return(skus)
  }
}
