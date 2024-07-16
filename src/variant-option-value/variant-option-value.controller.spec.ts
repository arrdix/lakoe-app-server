import { Test, TestingModule } from '@nestjs/testing';
import { VariantOptionValueController } from './variant-option-value.controller';
import { VariantOptionValueService } from './variant-option-value.service';

describe('VariantOptionValueController', () => {
  let controller: VariantOptionValueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VariantOptionValueController],
      providers: [VariantOptionValueService],
    }).compile();

    controller = module.get<VariantOptionValueController>(VariantOptionValueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
