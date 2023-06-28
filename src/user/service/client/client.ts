import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/user/Type';

@Injectable()
export class Client {
  private user: User[] = [
    {
      username: 'sakthi',
      password: 'sakthi',
    },
    {
      username: 'sakthi1',
      password: 'sakthi1',
    },
    {
      username: 'sakthi2',
      password: 'sakthi2',
    },
    {
      username: 'sakthi2',
      password: 'sakthi2',
    },
  ];

  getAllClient() {
    return this.user.map((user) => plainToClass(SerializedUser, user));
  }
}
