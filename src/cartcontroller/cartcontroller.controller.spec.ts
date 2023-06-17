import { Test, TestingModule } from '@nestjs/testing';
import { CartcontrollerController } from './cartcontroller.controller';

describe('CartcontrollerController', () => {
  let controller: CartcontrollerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartcontrollerController],
    }).compile();

    controller = module.get<CartcontrollerController>(CartcontrollerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
