import { Controller, Post, Body, Res } from "@nestjs/common";
import { CourierService } from "./courier.service";
import { CreateCourierDto } from "./dto/create-courier.dto";
import { GetRatesDto } from "./dto/get-rates.dto";
import { Response } from "express";

@Controller("courier")
export class CourierController {
  constructor(private readonly courierService: CourierService) {}

  @Post()
  async create(@Body() createCourierDto: CreateCourierDto) {
    return await this.courierService.create(createCourierDto);
  }

  @Post("rates")
  async getRates(@Body() getRatesDto: GetRatesDto, @Res() res: Response) {
    console.log("x", getRatesDto);
    const response = await this.courierService.getRates(getRatesDto);
    res.status(200).json(response);
  }
}
