import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartModule } from './cart/cart.module';
import { CartcontrollerController } from './cartcontroller/cartcontroller.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [CartModule, UserModule],
  controllers: [AppController, CartcontrollerController],
  providers: [AppService],
})
export class AppModule {}
