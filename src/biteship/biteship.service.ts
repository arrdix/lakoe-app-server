import { Injectable } from '@nestjs/common';
import { CreateBiteshipDto } from './dto/create-biteship.dto';
import { UpdateBiteshipDto } from './dto/update-biteship.dto';

@Injectable()
export class BiteshipService {
  create(createBiteshipDto: CreateBiteshipDto) {
    return 'This action adds a new biteship';
  }

  findAll() {
    return `This action returns all biteship`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biteship`;
  }

  update(id: number, updateBiteshipDto: UpdateBiteshipDto) {
    return `This action updates a #${id} biteship`;
  }

  remove(id: number) {
    return `This action removes a #${id} biteship`;
  }
}
