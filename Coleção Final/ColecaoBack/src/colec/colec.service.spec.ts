import { Test, TestingModule } from '@nestjs/testing';
import { ColecService } from './colec.service';

describe('ColecService', () => {
  let service: ColecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ColecService],
    }).compile();

    service = module.get<ColecService>(ColecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
