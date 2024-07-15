import { Injectable } from "@nestjs/common";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { CreateSubCategoryDto } from "./dto/create-subCategory.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  // Untuk membuat cucu atau yg paling terakhir
  createSubCategory(createSubCategory: CreateSubCategoryDto) {
    return this.prismaService.categories.create({
      data: {
        name: createSubCategory.name,
      },
    });
  }

  // Untuk membuat parent atau parent dari cucu
  createCategory(createCategoryDto: CreateCategoryDto) {
    return this.prismaService.categories.create({
      data: {
        name: createCategoryDto.name,
        subcategory: {
          connect: {
            id: createCategoryDto.categoryId,
          },
        },
      },
    });
  }

  async findAll() {
    return await this.prismaService.categories.findMany({
      include: {
        subcategory: {
          include: {
            subcategory: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    return await this.prismaService.categories.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prismaService.categories.update({
      where: {
        id,
      },
      data: updateCategoryDto,
    });
  }

  remove(id: number) {
    return this.prismaService.categories.delete({
      where: {
        id,
      },
    });
  }
}
