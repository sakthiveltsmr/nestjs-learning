import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  User = [
    {
      id: 1,
      name: 'sakthivel',
      age: 25,
    },
    { id: 2, name: 'thirumalai', age: 24 },
    { id: 3, name: 'sadeeshwaran', age: 25 },
  ];
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user' + createUserDto;
  }

  findAll() {
    return this.User;
  }

  findOne(id: number) {
    return this.User.find((item) => item.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user` + updateUserDto;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
