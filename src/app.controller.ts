import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get(`:id`)
  findOne(@Param('id') id: string) {
    return 'retun the single user' + id;
  }
  @Post()
  create(@Body() body: any) {
    return body;
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() Body: any) {
    return 'your data is updated';
  }
}
