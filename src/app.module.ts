import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartModule } from './cart/cart.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CartModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
