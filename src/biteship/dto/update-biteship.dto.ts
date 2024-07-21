import { PartialType } from '@nestjs/mapped-types';
import { CreateBiteshipDto } from './create-biteship.dto';

export class UpdateBiteshipDto extends PartialType(CreateBiteshipDto) {}
