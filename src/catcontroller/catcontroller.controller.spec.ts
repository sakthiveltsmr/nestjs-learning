import { Test, TestingModule } from '@nestjs/testing';
import { CatcontrollerController } from './catcontroller.controller';

describe('CatcontrollerController', () => {
  let controller: CatcontrollerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatcontrollerController],
    }).compile();

    controller = module.get<CatcontrollerController>(CatcontrollerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
