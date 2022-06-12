import { Controller, Get } from '@nestjs/common';
import { RSSService } from '@services/RSS';

@Controller('rss')
export class RSSController {
  constructor(private readonly rssService: RSSService) {}

  @Get()
  getHello(): string {
    return this.rssService.getHello();
  }
}
