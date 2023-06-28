import { Module } from '@nestjs/common';
import { ClientController } from 'src/user/controller/client/client.controller';
import { Client } from 'src/user/service/client/client';

@Module({
  controllers: [ClientController],
  providers: [
    {
      provide: 'USER_SERVICE',
      useClass: Client,
    },
  ],
})
export class ClientModule {}
