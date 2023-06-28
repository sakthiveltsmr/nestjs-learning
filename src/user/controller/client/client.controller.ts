import { Controller, Get, Inject } from '@nestjs/common';
import { Client } from 'src/user/service/client/client';

@Controller('client')
export class ClientController {
  constructor(@Inject('USER_SERVICE') private readonly clientService: Client) {}

  @Get('')
  getClient() {
    return this.clientService.getAllClient();
  }
}
