import { Injectable } from '@nestjs/common';

@Injectable()
export class RSSService {
  getHello(): string {
    return 'Hello RSS Service';
  }
}
