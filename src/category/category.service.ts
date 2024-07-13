import { Injectable } from "@nestjs/common";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createCategoryDto: CreateCategoryDto) {
    return this.prismaService.categories.create({
      data: createCategoryDto,
    });
  }

  async findAll() {
    return await this.prismaService.categories.findMany({});
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
