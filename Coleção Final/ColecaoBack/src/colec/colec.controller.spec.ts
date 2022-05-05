import { Test, TestingModule } from '@nestjs/testing';
import { ColecController } from './colec.controller';

describe('ColecController', () => {
  let controller: ColecController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ColecController],
    }).compile();

    controller = module.get<ColecController>(ColecController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
