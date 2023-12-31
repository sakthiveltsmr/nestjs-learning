import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request, Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    const result = this.userService.create(createUserDto);
    if (result) {
      res.status(201).send('user created successfully');
    } else {
      res.status(400).send({ message: 'customer not found!' });
    }
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const customer = this.userService.findOne(+id);
    if (customer) {
      res.status(200).send(customer);
    } else {
      res.status(400).send({ message: 'customer not found!' });
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
