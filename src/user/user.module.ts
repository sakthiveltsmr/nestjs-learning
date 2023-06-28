import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ClientModule } from './module/client/client.module';
import { ClientController } from './controller/client/client.controller';
import { Client } from './service/client/client';

@Module({
  controllers: [UserController, ClientController],
  providers: [UserService, Client],
  imports: [ClientModule],
})
export class UserModule {}
