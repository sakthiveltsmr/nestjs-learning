import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('sakthi')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): string {
    return this.appService.findAll();
  }
  @Get(`:id`)
  findOne(@Param('id') id: string) {
    return this.appService.findOne(id);
  }
  @Post()
  create(@Body() body: any) {
    return this.appService.create(body);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() Body: any) {
    return this.appService.update(id, Body);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appService.remove(id);
  }
}
