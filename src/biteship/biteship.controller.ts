import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BiteshipService } from './biteship.service';
import { CreateBiteshipDto } from './dto/create-biteship.dto';
import { UpdateBiteshipDto } from './dto/update-biteship.dto';

@Controller('biteship')
export class BiteshipController {
  constructor(private readonly biteshipService: BiteshipService) {}

  @Post()
  create(@Body() createBiteshipDto: CreateBiteshipDto) {
    return this.biteshipService.create(createBiteshipDto);
  }

  @Get()
  findAll() {
    return this.biteshipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.biteshipService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBiteshipDto: UpdateBiteshipDto) {
    return this.biteshipService.update(+id, updateBiteshipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.biteshipService.remove(+id);
  }
}
