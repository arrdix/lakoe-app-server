import { Test, TestingModule } from '@nestjs/testing';
import { VariantOptionValueService } from './variant-option-value.service';

describe('VariantOptionValueService', () => {
  let service: VariantOptionValueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VariantOptionValueService],
    }).compile();

    service = module.get<VariantOptionValueService>(VariantOptionValueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
