import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hai sakthi!';
  }

  create(body: any) {
    return body;
  }

  update(id: string, body: any) {
    return { id, body };
  }

  findAll() {
    return 'return all the data';
  }

  remove(id: string) {
    return id + 'user will be deleted';
  }
  findOne(id: string) {
    return 'your find user id is' + id;
  }
}
