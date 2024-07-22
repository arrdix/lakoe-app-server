import { Injectable } from "@nestjs/common";
import { CreateCourierDto } from "./dto/create-courier.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateCourierDto } from "./dto/update-courier.dto";
import { GetRatesDto } from "./dto/get-rates.dto";
import axios from "axios";
import CONFIG from "src/configs/config";

@Injectable()
export class CourierService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCourierDto: CreateCourierDto) {
    return await this.prismaService.couriers.create({
      data: createCourierDto,
    });
  }

  async getRates(getRatesDto: GetRatesDto) {
    const response = await axios.post(
      "https://api.biteship.com/v1/rates/couriers",
      getRatesDto,
      {
        headers: {
          Authorization: CONFIG.BITESHIP_API_KEY,
        },
      }
    );
    const courierData = response.data.pricing.map((courier) => {
      return {
        courierCode: courier.courier_code,
        serviceCode: courier.courier_service_code,
        serviceName: courier.courier_service_name,
        courierPrice: courier.price,
      };
    });

    return courierData;
  }

  async findAll() {
    return await this.prismaService.couriers.findMany();
  }

  async findOne(id: number) {
    return await this.prismaService.couriers.findFirst({
      where: {
        id,
      },
    });
  }

  update(id: number, updateCourierDto: UpdateCourierDto) {
    return this.prismaService.couriers.update({
      where: {
        id,
      },
      data: updateCourierDto,
    });
  }

  remove(id: number) {
    return this.prismaService.couriers.delete({
      where: {
        id,
      },
    });
  }
}
